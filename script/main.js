// identify the content block
const content = document.querySelector(".content")

// identify the buttons that will be pressed
const buttons = [document.querySelector("#homebutton"), document.querySelector("#aboutbutton"), document.querySelector("#projectbutton")];

// three possible sections will show up
const home = document.querySelector(".home")
const aboutme = document.querySelector(".about")
const projects = document.querySelector(".projects")


function set_tagline(tagline, option) {
}

// onclick function - switches content and button style
function switch_content(option) {
    console.log("clicked button", option)
    buttons.forEach((element) => {
        element.classList.remove("active")
    })
    content.replaceChildren("");
    switch (option) {
        case "home":
            content.appendChild(home)
            document.querySelector("#homebutton").classList.add("active")
            set_tagline(tagline, "home")
            break
        case "about":
            content.appendChild(aboutme)
            aboutme.classList.add("active")
            document.querySelector("#aboutbutton").classList.add("active")
            set_tagline(tagline, "aboutme")
            break
        case "projects":
            content.appendChild(projects)
            projects.classList.add("active")
            document.querySelector("#projectbutton").classList.add("active")
            set_tagline(tagline, "projects")
            break
    }
}

const tagline = document.getElementById("tagline");

tagline.textContent = "hello world";

// "click" the home button on webpage load
document.querySelector("#homebutton").click();