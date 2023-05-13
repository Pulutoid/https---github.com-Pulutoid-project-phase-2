document.getElementById("submitButton").addEventListener("click", async (event) => {
    event.preventDefault();
    function constructObjectFromForm() {
        const title = document.getElementById("title-textarea").value;
        const description = document.getElementById("description-textarea").value;
        const journal = document.getElementById("journal-textarea").value;
        const data = {
            // id: (Math.floor(Math.random() * (99999999 - 10 + 1)) + 10),
            userID: 1,
            title: title,
            description: description,
            journal: journal,
            files: 0
        };
        return data;
    }
    let userID = 1;
    let response = await fetch(`/newIdea/${userID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(constructObjectFromForm())
    });
});