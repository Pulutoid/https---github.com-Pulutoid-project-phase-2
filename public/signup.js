document.getElementById("submitButton").addEventListener("click", async (event) => {
    event.preventDefault();
    function constructObjectFromForm() {
        const name = document.getElementById("name").value;
        const gender = document.getElementById("gender").value;
        const birthdate = document.getElementById("birthdate").value;
        const data = {
            // id: (Math.floor(Math.random() * (99999999 - 10 + 1)) + 10),
            name: name,
            gender: gender,
            birthdate: birthdate,
            creationDate: new Date()

        };
        return data;
    }
    let userID = 1;
    let response = await fetch(`/newProfile/${userID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(constructObjectFromForm())
    });

    window.location.href = "/chooseProfile.html";
});


