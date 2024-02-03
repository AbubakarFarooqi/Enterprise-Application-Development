function fetchUserData(event) {
    event.preventDefault();
    const username = document.getElementById("txtUsername").value;
    // ajax call
    const xhr = new XMLHttpRequest()
    xhr.open("GET", `https://api.github.com/users/${username}`, true)
    xhr.onload = function () {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById("userImage").setAttribute("src", data.avatar_url)
            console.log("Azan")
            document.getElementById("followers").setAttribute("value", data.followers)
            document.getElementById("name").setAttribute("value", data.name)
            document.getElementById("following").setAttribute("value", data.following)
            document.getElementById("createdAt").setAttribute("value", data.created_at)
        }
        else {
            console.log("Error fecthing")
        }
    }

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send()

}