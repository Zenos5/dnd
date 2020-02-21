var baseURL = "https://sv443.net/jokeapi/v2";
var categories = [ "Miscellaneous"];
var params = [
    "blacklistFlags=nsfw,religious,racist",
    "type=single"
];

var xhr = new XMLHttpRequest();
xhr.open("GET", baseURL + "/joke/" + categories + "?" + params.join("&"));

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status < 300) // readyState 4 means request has finished + we only want to parse the joke if the request was successful (status code lower than 300)
    {
        var randomJoke = JSON.parse(xhr.responseText);

        // If type == "single", the joke only has the "joke" property
        var output = "<p>" + randomJoke.joke + "</p>";
        document.getElementById("result").innerHTML = output;
    }
    else if(xhr.readyState == 4)
    {
        alert("Error while requesting joke.\n\nStatus code: " + xhr.status + "\nServer response: " + xhr.responseText);
    }
};

xhr.send();
