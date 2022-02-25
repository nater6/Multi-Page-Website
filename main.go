package main

import (
	"log"
	"net/http"
	"text/template"
)



func HomePage(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		r.URL.Path = "/"
	}

	tpl := template.Must(template.ParseGlob("templates/homepage.html"))

	if err := tpl.Execute(w,nil); err != nil {
		log.Fatal(err.Error())
	}




}

func main() {

	http.HandleFunc("/", HomePage)
	
	http.ListenAndServe(":3000", nil)
}

