let url = "https://rickandmortyapi.com/api/character";

async function DataFetch() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    
    for (let i = 0; i < data.results.length; i++) {
        let Chacters = document.querySelector(".Chacters");
        
        let div = document.createElement("div");
        div.className = "div";

        let heading = document.createElement("h4");
        heading.innerHTML = data.results[i].name;

        let images = document.createElement("img");
        images.className = "img";
        images.src = data.results[i].image;

        div.append(heading);
        div.append(images);
        Chacters.append(div);
    }
}

DataFetch();