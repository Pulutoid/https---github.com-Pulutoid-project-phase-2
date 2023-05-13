// document.getElementsByClassName("idea idea1")[0].addEventListener("click", function () {
//     window.location.href = "idea1Expanded.html";
// })
// document.getElementsByClassName("idea idea2")[0].addEventListener("click", function () {
//     window.location.href = "idea2Expanded.html";
// })

document.addEventListener("DOMContentLoaded", () => {

    // const ajax = new XMLHttpRequest();

    let currentProfile = localStorage.getItem("profile")
    console.log(`current profile id is ${currentProfile}`)

    document.cookie = "profile=" + currentProfile + "; expires=" + new Date(2075, 1, 1).toUTCString();


}
)

Array.from(document.getElementsByClassName('idea')).forEach((each) => {

    each.addEventListener('click', (event) => {


        event.preventDefault();
        console.log('idea clicked')
        event.currentTarget.querySelector('[data-profile-id]')
        let profileIdElement = event.currentTarget;
        // Retrieve the value of the data-profile-id attribute
        let profileId = profileIdElement.dataset.profileId;
        window.location.href = `/ideaExpanded.html/${profileId}`;




    })
});