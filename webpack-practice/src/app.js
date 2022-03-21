const monkey = require("./monkey,js")
require("./css/main.css")

const components = ()=>{
    const h1 = document.createElement("h1");
    h1.innerText = "hello webpack!";
    return h1;
}

document.body.appendChild(components())