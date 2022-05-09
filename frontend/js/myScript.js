

let session;

// Get the login modal
let lmodal = document.getElementById("loginModal");

// Get the button that opens the login modal
let lbtn = document.getElementById("loginBtn");

// Get the button that opens the register modal on the login modal
let rbtnl = document.getElementById("registerBtnl");

// Get the <span> element that closes the login modal
let lspan = document.getElementsByClassName("lclose")[0];

// Get the button that opens that login the user 
let fbtn_login = document.getElementById("form-btn-login");

// close and reset the login modal
const Closelogin = ()=> {
  lmodal.style.display = "none";
  document.getElementById("userName").value = ""
  document.getElementById("password").value = ""
}

// When the user clicks the button, open the login modal 
fbtn_login.onclick = function (event) {
  event.preventDefault();
  let data = new FormData();


  data.append("userName", document.getElementById("userName").value);
  data.append("password", document.getElementById("password").value);


  for (let [k, v] of data.entries()) { console.log(k, v); }

  fetch("http://localhost:8800/login",
    {
      method: 'POST',
      body: data
    })
    .then(function (response) {
      return response.text()
    }).then(function (text) {
      //text is the server's response
      navbutdivnl.style.display ="none"
      navbutdivl.style.display ="flex"
      Closelogin()
      console.log(text)
    });

}

// When the user clicks the button, open the login modal 
lbtn.onclick = function () {
  lmodal.style.display = "block";
}

// When the user clicks on login , close the login modal and open the register modal
rbtnl.onclick = function () {
  rmodal.style.display = "block";
  Closelogin()
}


// When the user clicks on <span> (x), close the login modal
lspan.onclick = function () {
  Closelogin()
}

//--------------------------------------------


// Get the register modal
let rmodal = document.getElementById("registerModal");

// Get the button that opens the login modal
let rbtn = document.getElementById("registerBtn");

// Get the button that opens the login modal on the register modal
let lbtnr = document.getElementById("loginBtnr");

// Get the <span> element that closes the login modal
let rspan = document.getElementsByClassName("rclose")[0];

// Get the button that opens that register a user 
let fbtn_register = document.getElementById("form-btn-register");

let navbutdivnl = document.getElementById("Not_Login");
let navbutdivl = document.getElementById("Login");

const Closeregister = ()=> {
  document.getElementById("rUserName").value = ""
  document.getElementById("rPassword").value = ""
  document.getElementById("rEmail").value = ""
  rmodal.style.display = "none";
}

// When the user clicks the button, open the login modal 
fbtn_register.onclick = function (event) {
  event.preventDefault();
  let data = new FormData();

  data.append("userName", document.getElementById("rUserName").value);
  data.append("password", document.getElementById("rPassword").value);
  data.append("email", document.getElementById("rEmail").value);

  fetch("http://localhost:8800/register",
    {
      method: 'POST',
      body: data
    })
    .then(function (response) {
      return response.text()
    }).then(function (text) {
      //text is the server's response
      console.log(text)
    });



  for (let [k, v] of data.entries()) { console.log(k, v); }
  navbutdivnl.style.display ="none"
  navbutdivl.style.display ="flex"
  Closeregister()

}


// When the user clicks the button, open the login modal 
rbtn.onclick = function () {
  rmodal.style.display = "block";
}

// When the user clicks on login , close the register modal and open the login modal
lbtnr.onclick = function () {
  Closeregister()
  lmodal.style.display = "block";
}


// When the user clicks on <span> (x), close the login modal
rspan.onclick = function () {
  Closeregister()
}





//--------------------------------------------

// logout function

// Get the button that logout the user
let logoutBtn = document.getElementById("logoutBtn");

// When the user clicks on logoutBtn that logout the user
logoutBtn.onclick = function() {

  let data = new FormData();
  console.log("text")
  fetch("http://localhost:8800/logout",
    {
      method: 'POST',
      body: data
    })
    .then(function (response) {
      return response.text()
    }).then(function (text) {
      //text is the server's response
      console.log(text)
    });

  navbutdivnl.style.display ="flex"
  navbutdivl.style.display ="none"
}

//--------------------------------------------

// onload
const Onload = (cookie)=> {
if (cookie !== ""){
  session = cookie.split("&")

  if (session.length > 2) {
    navbutdivnl.style.display ="none"
    navbutdivl.style.display ="flex"
  }
  console.log(session)
}
}

//--------------------------------------------


// Get the post btn to open the post modal
let postModalBtn = document.getElementById("postModalBtn");
// Get the post modal
let pmodal = document.getElementById("postModal");

// Get the <span> element that closes the login modal
let pspan = document.getElementsByClassName("pclose")[0];

// Get the post btn to post
let postBtn = document.getElementById("form-btn-post");

// close and reset the post modal
const Closepost = ()=> {
  pmodal.style.display = "none";
  document.getElementById("categories").value = "GO"
  document.getElementById("title").value = ""
  document.getElementById("post").value = ""
}


// When the user clicks the button it make a new post 
 postBtn.onclick = function(event) {
   event.preventDefault();
   let data = new FormData();
   console.log("text")
   data.append("categories", document.getElementById("categories").value);
   data.append("title", document.getElementById("title").value);
   data.append("post", document.getElementById("post").value);

   fetch("http://localhost:8800/post",
    {
      method: 'POST',
      body: data
    })
    .then(function (response) {
      return response.text()
    }).then(function (text) {
      //text is the server's response
      console.log(text)
      Closepost()
    });

  
 }

// When the user clicks the button, open the login modal 
postModalBtn.onclick = function() {
  pmodal.style.display = "block";
}


// When the user clicks on <span> (x), close the login modal
pspan.onclick = ()=> Closepost()


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == lmodal) {
    Closelogin()
  } else if (event.target == rmodal) {
    Closeregister()
  } else if (event.target == pmodal) {
    Closepost()
  }
}