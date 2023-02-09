fetch('https://official-joke-api.appspot.com/jokes/programming/random#')
    .then(data=>data.json())
    .then(joke => {
        console.log(joke);
        const jokeSetup = joke[0].setup;
        const jokePunchline = joke[0].punchline;
        document.getElementById('setup').innerHTML = jokeSetup;
        document.getElementById('punchline').innerHTML = "- " +jokePunchline;
    })