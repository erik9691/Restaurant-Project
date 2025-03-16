export default LoadHome;

function LoadHome() {
    const divContent = document.querySelector("#content");

    const sectionHero = document.createElement("section");
    sectionHero.classList.add("hero");
    const sectionHours = document.createElement("section");
    sectionHours.classList.add("hours");
    const sectionLocations = document.createElement("section");
    sectionLocations.classList.add("locations");

    // Create a new pTitle for each section
    const pTitleHero = document.createElement("p");
    pTitleHero.classList.add("title");
    pTitleHero.innerText = "Moonlit Bites";
    sectionHero.appendChild(pTitleHero);

    const pTitleHours = document.createElement("p");
    pTitleHours.classList.add("title");
    pTitleHours.innerText = "Our Hours";
    sectionHours.appendChild(pTitleHours);

    const pTitleLocations = document.createElement("p");
    pTitleLocations.classList.add("title");
    pTitleLocations.innerText = "Our Locations";
    sectionLocations.appendChild(pTitleLocations);

    const pSectionContent = document.createElement("p");
    pSectionContent.classList.add("section-content");
    const ulHoursSectionContent = document.createElement("ul");
    ulHoursSectionContent.classList.add("section-content");
    const ulLocationsSectionContent = document.createElement("ul");
    ulLocationsSectionContent.classList.add("section-content");

    // Hero description
    pSectionContent.innerHTML = "Step into a world where the night is always young, and every bite feels like magic under the stars. At <strong>Moonlit Bites</strong>, we craft an unforgettable dining experience inspired by the mystery and beauty of the moonlit sky.";

    // Create individual li elements for hours section
    let li = document.createElement("li");
    li.innerText = "Sunday: 8am - 8pm";
    ulHoursSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Monday: 6am - 6pm";
    ulHoursSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Tuesday: 6am - 6pm";
    ulHoursSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Wednesday: 6am - 6pm";
    ulHoursSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Thursday: 6am - 10pm";
    ulHoursSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Friday: 6am - 10pm";
    ulHoursSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerText = "Saturday: 8am - 10pm";
    ulHoursSectionContent.appendChild(li);

    // Create individual li elements for locations section
    li = document.createElement("li");
    li.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">123 Forest Drive, Forestville, Maine</a>';
    ulLocationsSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">1275 Colusa Ave, Yuba City, California</a>';
    ulLocationsSectionContent.appendChild(li);

    li = document.createElement("li");
    li.innerHTML = '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">1526 Hurffville Rd, Deptford Township, New Jersey</a>';
    ulLocationsSectionContent.appendChild(li);

    sectionHero.appendChild(pSectionContent);
    sectionHours.appendChild(ulHoursSectionContent);
    sectionLocations.appendChild(ulLocationsSectionContent);

    divContent.appendChild(sectionHero);
    divContent.appendChild(sectionHours);
    divContent.appendChild(sectionLocations);
}
