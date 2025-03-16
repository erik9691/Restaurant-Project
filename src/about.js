export default LoadAbout;

function LoadAbout()
{
    const divContent = document.querySelector("#content");

    const pTest = document.createElement("p");
    pTest.innerText = "TEST ABOUT";

    divContent.appendChild(pTest);
}