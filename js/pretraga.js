const wrapper = document.getElementById('wrapper');

wrapper.innerHTML = "<img class='load' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'>";


fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(res => res.json())
    .then(filmovi => {
        console.log(filmovi);
        wrapper.innerHTML= "";
        for( i = 0;i<10;i++){
            wrapper.innerHTML += `
            <br> Naziv:  ${filmovi[i].naziv} <br>
            Godina: ${filmovi[i].godina} <br>
            Slika: <img src='${filmovi[i].slika}' height="200px", width="150px"> <hr>

            `;
            
        }
        
    })



    function traziFilm() { 
        let input = document.getElementById('iPretraga2').value 
        input=input.toLowerCase(); 
        let film = document.getElementsByClassName('filmovi'); 
          
        for (i = 0; i < film.length; i++) {  
            if (!film[i].innerHTML.toLowerCase().includes(input)) { 
                film[i].style.display="none"; 
            } 
            else { 
                film[i].style.display="list-item";                  
            } 
        } 
    } 
    
