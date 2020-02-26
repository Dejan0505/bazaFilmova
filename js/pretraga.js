const wrapper = document.getElementById('wrapper');

wrapper.innerHTML = "<img class='load' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'>";

let filmovi = [];

fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(res => res.json())
    .then(data => {
        filmovi = data;
        wrapper.innerHTML = "";
        for (i = 0; i < 10; i++) {
            wrapper.innerHTML += `
            <br> Naziv:  ${filmovi[i].naziv} <br>
            Godina: ${filmovi[i].godina} <br>
            Slika: <img src='${filmovi[i].slika}' height="200px", width="150px"> <hr>
            `;
        }
    })


function traziFilm() {
    wrapper.innerHTML = '';
    const fraza = document.getElementById('iPretraga2').value.toLowerCase();

    for (let i = 0; i < filmovi.length; i++) {
        if (fraza.length >= 1 && filmovi[i].naziv.toLowerCase().includes(fraza)) {
            wrapper.innerHTML += `
            <br> Naziv:  ${filmovi[i].naziv} <br>
            Godina: ${filmovi[i].godina} <br>
            Slika: <img src='${filmovi[i].slika}' height="200px", width="150px"> <hr>
            `;
        }
    }
}

