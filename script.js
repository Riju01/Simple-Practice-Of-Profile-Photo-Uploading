let btn = document.querySelector("#btnUp");
let upload = document.querySelector("#upload");
let flowerImage = document.querySelector("img");
let fileNameDisplay = document.createElement("p");
fileNameDisplay.id = "fileNameDisplay";
document.querySelector("div").appendChild(fileNameDisplay);
let checkBox = document.querySelector("#check");

const defaultImageURL = flowerImage.src;

btn.addEventListener("click", function(event) {
    if (upload.files.length > 0) {
        const file = upload.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            flowerImage.src = e.target.result;
            fileNameDisplay.textContent = `File Uploaded Successfuly!`;
            upload.value = "";
            checkBox.checked = false;

            setTimeout(() => {
                fileNameDisplay.textContent = "";
            }, 1000);
        }

        reader.readAsDataURL(file);
    } else {
        fileNameDisplay.textContent =`Select File First!`;
        setTimeout(() => {
            fileNameDisplay.textContent = "";
        }, 1000);
    }
});
