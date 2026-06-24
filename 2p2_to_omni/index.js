import * as parser from "./parser/parser.js";
import * as gmd_parser from "./parser/gd_string_parser.js";
import * as validate from "./validate/validate.js"

const form = document.querySelector("form");
const input = form.querySelector("#file");

async function decomp(base64Str) {
    const filter = base64Str
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .trim();

    const raw = atob(filter);
    const len = raw.length;
    
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = raw.charCodeAt(i);
    }

    const ds = new DecompressionStream('gzip');
    const response = new Response(bytes);
    const stream = response.body.pipeThrough(ds);

    return await new Response(stream).text();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
    const version = document.getElementById("version").value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
    
        const arr = parser.gmd_parse(contents);
        var string = parser.value_by_key(arr, 4);
        console.log(string);
        if(string.startsWith("H4sIAAAAAAAA"))
        {
            decomp(contents).then((str) => {
                string = str;
            });
        }

        console.log(string);

        const objectArr = gmd_parser.get_objects(string);
        console.log(objectArr);
        if(!validate.validate_object_ids(objectArr, version)) alert("Some errors happened. \n" + validate.errors.join());
    }

    reader.readAsText(input.files[0]);
});