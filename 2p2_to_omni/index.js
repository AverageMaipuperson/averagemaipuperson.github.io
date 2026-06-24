import * as parser from "./parser/parser.js";
import * as gmd_parser from "./parser/gd_string_parser.js";
import * as validate from "./validate/validate.js"

const form = document.querySelector("form");
const input = form.querySelector("#file");

function urlsafe_base64_decode(input) {
    const bytes = Uint8Array.fromBase64(input, { alphabet: 'base64url' });
    return new TextDecoder().decode(bytes);
}

async function decomp(cont)
{
    const cont2 = urlsafe_base64_decode(cont);
    console.log(cont2);

    const ds = new DecompressionStream('gzip');
    const response = new Response(cont2);
    const cont3 = response.body.pipeThrough(ds);

    return await new Response(cont3).text();
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
            string = decomp(string);
        }

        console.log(string);

        const objectArr = gmd_parser.get_objects(string);
        console.log(objectArr);
        if(!validate.validate_object_ids(objectArr, version)) alert("Some errors happened. \n" + validate.errors.join());
    }

    reader.readAsText(input.files[0]);
});