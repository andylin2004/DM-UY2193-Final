document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.getElementById("navbar");
    let navbar_dummy = document.getElementById("navbar_dummy");
    let websiteTitle = document.createElement("h1");
    let websiteTitleURL = document.createElement("a");
    websiteTitleURL.href = "index.html";
    websiteTitleURL.innerText = "sp00nful 0f h3ll";
    websiteTitle.appendChild(websiteTitleURL);
    navbar.appendChild(websiteTitle);

    let pageLinkContainer = document.createElement("div");

    let bereal = document.createElement("h3");
    let berealLink = document.createElement("a");
    berealLink.href = "bereal.html";
    berealLink.innerText = "BeReal";
    bereal.appendChild(berealLink);
    pageLinkContainer.appendChild(bereal);

    let citizen = document.createElement("h3");
    let citizenLink = document.createElement("a");
    citizenLink.href = "citizen.html";
    citizenLink.innerText = "Citizen";
    citizen.appendChild(citizenLink);
    pageLinkContainer.appendChild(citizen);

    navbar.appendChild(pageLinkContainer);
})