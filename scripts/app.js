"use strict";

// IIFE - Immediately Invoked Functional Expression
(function(){

    function DisplayHomePage(){
        console.log("Called DisplayHomePage()");

        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click", function(){
           location.href = "About.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");

        MainParagraph.textContent = "This is the first Paragraph";

        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString}The Main Paragraph`;
        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        let Article = document.createElement("article");
        let articleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;

        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayAboutPage(){
        console.log("Called DisplayHomePage()");
    }

    function DisplayProductsPage(){
        console.log("Called DisplayHomePage()");
    }

    function DisplayServicesPage(){
        console.log("Called DisplayHomePage()");
    }

    function DisplayContactPage(){
        console.log("Called DisplayHomePage()");
    }
    function Start(){
        console.log("App Started");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;

            case "Products":
                DisplayProductsPage();
                break;

            case "Services":
                DisplayServicesPage();
                break;

            case "About Us":
                DisplayAboutPage();
                break;

            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }
    window.addEventListener( "Load", Start);
})(); // This is how you declare a function