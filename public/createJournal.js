document.getElementById("submitButton").addEventListener("click", async (event) => {
    event.preventDefault();

    let rawCookie = await fetch(`/getCookie`, { method: 'GET' });
    let cookie = await rawCookie.text();


    console.log('retirved cookie is ')
    console.log(cookie)


    function constructObjectFromForm() {
        const title = document.getElementById("title-textarea").value;
        const description = document.getElementById("description-textarea").value;
        const journal = document.getElementById("journal-textarea").value;



        const data = {
            // id: (Math.floor(Math.random() * (99999999 - 10 + 1)) + 10),
            userID: cookie,
            title: title,
            description: description,
            journal: journal,
            files: 0
        };
        return data;
    }

    let userID = cookie;

    let response = await fetch(`/newJournal/${userID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(constructObjectFromForm())
    });

    window.location.href = "/"

});