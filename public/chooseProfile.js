
document.getElementById("backButton").addEventListener("click", (event) => {

    event.preventDefault();

    window.location.href = '/index.html';



}
)


Array.from(document.querySelectorAll(".row.g-0")).forEach((each) => {
    each.addEventListener("click", (event) => {
        console.log("card clicked");
        chooseProfile(event);
    });
});

function chooseProfile(event) {
    let ajax = new XMLHttpRequest();

    let profileIdElement = event.currentTarget.querySelector('[data-profile-id]');
    let profileId = profileIdElement.dataset.profileId;

    console.log(event);
    localStorage.setItem("profile", profileId);
    console.log("localstorage item is:", localStorage.getItem("profile"));
    document.cookie = "profile=" + localStorage.getItem("profile") + "; expires=" + new Date(2075, 1, 1).toUTCString();

    languageSelected = String(localStorage.getItem("profile"));
}
