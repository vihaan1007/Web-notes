//fetch API: it provides an interface for fetching resources. It uses request and response objects. Application Proggraming Interface.
const Url = "https://uselessfacts.jsph.pl/api/v2/facts/random";
let facts = document.querySelector("#fact");
let but = document.querySelector("#but");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(Url /*url*/); //GET request
    console.log(response); //JSON format not JS
    console.log(response.status);
    let data = await response.json(); //JS format
    console.log(data);
    console.log(data.text);
    facts.innerText = data.text;
};

but.addEventListener("click", () => {
    getFacts();
});

//AJAX: asynchronous JS and XML. new: AJAJ: asynchronous JS and JSON. XML is not in use and replaced by JSON.
//JSON: JS object notation
//json(): returns a second promise that resolves with the result of parsing the response body as JSON.(input-> JSON, output-> JS object)

//Request and Response

//HTTP: Hyper Text Transfer Protocol
/*Status: informational: 100-199
          successful: 200-299
          redirection: 300-399
          client error: 400-499
          server error: 500-599
*/
//HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.  