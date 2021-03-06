package main

import (
	"database/sql"
	"fmt"
	"forum/database"
	"forum/handler"
	"log"
	"net/http"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./database/forum.db")
	if err != nil {
		log.Fatal("Database conection error")
	}
	Forum := &handler.Env{
		Forum: database.CreateDatabase(db),
	}
	defer db.Close()

	// Forum.Forum.RemoveSession("")
	http.HandleFunc("/", Forum.Home)
	http.HandleFunc("/login/callback", Forum.Redirected)
	http.HandleFunc("/login/callback/2", Forum.Redirected2)
	http.HandleFunc("/register", Forum.Register)
	http.HandleFunc("/login", Forum.Login)
	http.HandleFunc("/post", Forum.Post)
	http.HandleFunc("/comment", Forum.Comment)
	http.HandleFunc("/logout", Forum.Logout)
	cssPath := http.FileServer(http.Dir("./frontend"))
	http.Handle("/frontend/", http.StripPrefix("/frontend/", cssPath)) // handling the CSS
	fmt.Printf("Starting server at port 8800\n")
	log.Fatal(http.ListenAndServe(":8800", nil))
}
