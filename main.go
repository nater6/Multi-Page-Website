package main

import (
	"fmt"
	"handle/handlers"
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./assets"))

	http.Handle("/assets/", http.StripPrefix("/assets/", fs)) // handling the CSS
	http.HandleFunc("/", handlers.HomePage)
	http.HandleFunc("/makeyourgame", handlers.MakeYourGame)
	log.Fatal(http.ListenAndServe(":8080", nil))
	fmt.Println("Starting Port :8080")
}
