import * as parser from "./parser/parser.js";

const form = document.querySelector("form");
const input = form.querySelector("#file");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    const version = document.getElementById("version").value;
    var contents = "";

    const reader = new FileReader();
    reader.onload = function(e) {
        contents = e.target.result;
    }

    reader.readAsText(input.files[0]);

    console.log(parser.xml_parse(contents));
});