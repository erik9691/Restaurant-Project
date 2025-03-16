import "./style.css";
import LoadHome from "./home.js";
import LoadMenu from "./menu.js";
import LoadAbout from "./about.js";

LoadHome();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>
{
    button.addEventListener("click", function (e)
    {
        SwitchTab(e.target.id);
    });
});

function SwitchTab(buttonId)
{
    const contentChildren = Array.from(document.querySelector("#content").childNodes);

    contentChildren.forEach((child) =>
    {
        child.remove();
    });

    switch (buttonId) {
        case "Home":
            LoadHome();
            break;
        case "Menu":
            LoadMenu();
            break;
        case "About":
            LoadAbout();
            break;
        default:
            break;
    }
}