const form = document.querySelector("form");
const input = form.querySelector("input[type='file']");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const version = document.getElementById("version").value;

    const reader = new FileReader();
    reader.onload = function(e) {
        const contents = e.target.result;
        console.log(contents);
    }

    reader.readAsText(input.files[0]);
});