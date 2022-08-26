package handlers

import (
	"fmt"
	"html/template"
	"net/http"
)

func HomePage(w http.ResponseWriter, r *http.Request) {
	if CheckURL("/", w, r) {
		return
	}
	if ExecuteTemp("templates/index.html", w) {
		return
	}
}

func MakeYourGame(w http.ResponseWriter, r *http.Request) {
	if CheckURL("/makeyourgame", w, r) {
		return
	}

	if ExecuteTemp("templates/makeyourgame.html", w) {
		return
	}
}

func AsciiArtWeb(w http.ResponseWriter, r *http.Request) {
	if CheckURL("/ascii-art-web", w, r) {
		return
	}

	if ExecuteTemp("templates/asciiartweb.html", w){
		return
	}
}

func CheckURL(url string, w http.ResponseWriter, r *http.Request) bool {
	if r.URL.Path != url {
		http.Error(w, "404 Status not found", http.StatusNotFound)
		return true
	}
	return false
}

func ExecuteTemp(path string, w http.ResponseWriter) bool {
	tpl := template.Must(template.ParseGlob(path))

	if err := tpl.Execute(w, nil); err != nil {
		fmt.Println("Error Executing the template at: "+path, err.Error())
		http.Error(w, "500 Status not found", http.StatusInternalServerError)
		return true
	}
	return false
}
