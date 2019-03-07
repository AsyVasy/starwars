function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}



function getInfo(truc) {
    console.log(truc)
    
    let people = document.querySelector('.zone-wrapper')
    
    let section = createNode("section");
    section.classList.add("zone");
    section.classList.add("info-zone");

    let article = createNode("article");
    article.classList.add("screen");

    let ul = createNode('ul')

     {
        let li = createNode("li");
        li.id = truc.name;
        li.innerHTML = truc[i];
        append(ul, li)  
    }

    append(article, ul)
    append(section, article)
    append(people, section)
}



function fetchApi(who, section) {
    fetch('https://swapi.co/api/' + who)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let list = myJson.results        
        let people = document.querySelector(section)
        let ul = createNode("ul")
        list.forEach(element => {
            let li = createNode("li");
            li.id = element.name;
            li.onclick = function (li) {
                getInfo(element)
            }
            li.innerHTML = element.name;
            append(ul, li)
        });
        append(people, ul)
    });
}


let character = 'people';
let characterSection = ".people-zone > .screen"
fetchApi(character, characterSection);


let planets = 'planets';
let planetSection = ".planets-zone > .screen";
fetchApi(planets, planetSection);


let starships = 'starships';
let starshipsSection = ".starships-zone > .screen";
fetchApi(starships, starshipsSection);


