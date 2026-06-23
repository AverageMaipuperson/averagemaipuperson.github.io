import * as parser from "./parser/parser.js";

const form = document.querySelector("form");
const input = form.querySelector("#file");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    const version = document.getElementById("version").value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        console.log(parser.xml_parse(contents));
    }

    reader.readAsText(input.files[0]);
});