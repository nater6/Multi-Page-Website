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

	tplHome := template.Must(template.ParseGlob("templates/homepage.html"))

	if err := tplHome.Execute(w,nil); err != nil {
		log.Fatal(err.Error())
	}
}

func GoLang(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/Go-Lang" {
		r.URL.Path = "/Go-Lang"
	}

	tplGoLang := template.Must(template.ParseGlob("templates/golang.html"))
	
	if err := tplGoLang.Execute(w,nil); err != nil{
		log.Fatal(err.Error())
	}
}

func JavaScript(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/JavaScript" {
		r.URL.Path = "/JavaScript"
	}
	
	tplJavaScript := template.Must(template.ParseGlob("templates/javascript.html"))

	if err := tplJavaScript.Execute(w,nil); err != nil {
		log.Fatal(err.Error())
	}
}

func Rust(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/Rust" {
		r.URL.Path = "/Go-Lang"
	}

	tplRust := template.Must(template.ParseGlob("templates/rust.html"))

	if err := tplRust.Execute(w,nil); err != nil {
		log.Fatal(err.Error())
	}
}

func main() {

	http.HandleFunc("/", HomePage)
	http.HandleFunc("/Go-Lang", GoLang)
	http.HandleFunc("/JavaScript", JavaScript)
	http.HandleFunc("/Rust", Rust)

	http.ListenAndServe(":3000", nil)
}

