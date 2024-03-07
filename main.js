//populate left div with cat images
async function populateCatImage() {
    const catURL = "https://api.thecatapi.com/v1/images/search";
    const catRequest = new Request(catURL);
    const catResponse = await fetch(catRequest);
    
    var catJson = await catResponse.json();
    var catDiv = document.getElementById('cat');

    //remove previous image
    while (catDiv.firstChild) {
        catDiv.removeChild(catDiv.lastChild);
    }

    //creates cat image
    for(let i = 0; i < catJson.length; i++) {
        let catObj = catJson[i];
    
        var elem = document.createElement("img");
        elem.setAttribute("src", catObj.url);
        elem.setAttribute("height", "500");
        elem.setAttribute("width", "600");
        catDiv.appendChild(elem);
    }
}
//populate right div with dog images
async function populateDogImage() {
    const dogURL = "https://dog.ceo/api/breeds/image/random";
    const dogRequest = new Request(dogURL);
    const dogResponse = await fetch(dogRequest);

    var dogJson = await dogResponse.json();
    var dogDiv = document.getElementById('dog');

    //remove previous image
    while (dogDiv.firstChild) {
        dogDiv.removeChild(dogDiv.lastChild);
    }
    //creates dog image
    var elem = document.createElement("img");
    elem.setAttribute("src", dogJson.message);
    elem.setAttribute("height", "500");
    elem.setAttribute("width", "600");
    dogDiv.appendChild(elem);

   
  }
  