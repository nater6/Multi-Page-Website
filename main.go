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
	http.HandleFunc("/ascii-art-web", handlers.AsciiArtWeb)
	log.Fatal(http.ListenAndServe(":8080", nil))
	fmt.Println("Starting Port :8080")
}
