let createBtn = document.getElementById("button-create");
let textInput = document.getElementById("text-input");
let outputContainer = document.getElementById("new-card");

createBtn.addEventListener("click", function() {
    createCard(textInput.value);
    textInput.value = "";
    textInput.focus
})


function createCard(input) {
    let outputDiv = document.createElement("div");
    outputDiv.setAttribute("class", "out-cards");
    let innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "in-cards");
    let content = document.createTextNode(input);
    innerDiv.appendChild(content);
    outputDiv.appendChild(innerDiv);
    let button = createButton();
    button.addEventListener("click", () => {
        outputContainer.removeChild(outputDiv);
    });
    outputDiv.appendChild(button);
    outputContainer.appendChild(outputDiv); 
    window.scrollTo(0,document.body.scrollHeight);  
}


function createButton(div, id) {
    let button = document.createElement("button");
    button.setAttribute("class", "delete-button");
    button.innerHTML = "Delete"
    return button;  
}




