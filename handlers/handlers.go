package handlers

import (
	"fmt"
	"html/template"
	"net/http"
)

func HomePage(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "404 Status not found", http.StatusNotFound)
		return 
	}

	tplHome := template.Must(template.ParseGlob("templates/index.html"))

	if err := tplHome.Execute(w, nil); err != nil {
		fmt.Println("Error Executing the homepage.html template",err.Error())
	}
}

func MakeYourGame(w http.ResponseWriter, r *http.Request) {
	// if r.URL.Path != "/" {
	// 	r.URL.Path = "/"
	// }

	tplHome := template.Must(template.ParseGlob("templates/makeyourgame.html"))

	if err := tplHome.Execute(w, nil); err != nil {
		fmt.Println("Error Executing the homepage.html template",err.Error())
	}
}



