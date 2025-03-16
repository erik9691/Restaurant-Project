export default LoadMenu;

function LoadMenu()
{
    const divContent = document.querySelector("#content");

    const pTest = document.createElement("p");
    pTest.innerText = "TEST MENU";

    divContent.appendChild(pTest);
}