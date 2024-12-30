const clickme = document.getElementById('clickme');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');



clickme.addEventListener('click', async () => {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    setup.style.display = 'inline-block';
    console.log(joke);

    setup.addEventListener('click', () => {
        const newSetup = document.createElement('li');
        punchline.style.display = 'inline-block';
        newSetup.innerHTML = joke.setup;

       
        const parentElement = document.getElementById('jokesList'); 
        parentElement.appendChild(newSetup);
punchline.addEventListener('click', () => {
    
        const newPunchline = document.createElement('li');
        newPunchline.innerHTML = joke.punchline;

        parentElement.appendChild(newPunchline);

})




    });
});
