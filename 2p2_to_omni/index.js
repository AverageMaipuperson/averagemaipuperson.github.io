import * as parser from "./parser/parser.js";
import * as gmd_parser from "./parser/gd_string_parser.js";
import * as validate from "./validate/validate.js"

const form = document.querySelector("form");
const input = form.querySelector("#file");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    const version = document.getElementById("version").value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        const arr = parser.gmd_parse(contents);
        const string = parser.value_by_key(arr, 4);

        const objectArr = gmd_parser.get_objects(string);
        if(!validate.validate_object_ids(objectArr, version)) alert("Some errors happened. \n" + validate.errors.join());
    }

    reader.readAsText(input.files[0]);
});