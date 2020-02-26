fetch('https://baza-filmova.herokuapp.com/filmovi/')
    .then(res => res.json())
    .then(filmovi => {
        console.log(filmovi);
        // TODO: pronaci 5 najnovijih filmova i dodati ih u HTML
    })
