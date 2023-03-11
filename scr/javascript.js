/* const btnClicked=()=>{
    console.log('passed!');
} */

const dictionary=(word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6b570b0d17msh57dd5ee80b59e8bp1b4cf6jsn130135d01e2c',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+ word, options)
        .then(response => response.json())
        .then(response => {
               // console.log(response)
              wordHeading.innerHTML=response.word;
              definition.innerHTML=response.definition.replace("2.","<br>2.").replace("3.","<br>3.").replace("4.","<br>4.").replace("5.","<br>5.").replace("6.","<br>6.").replace("7.","<br>7.").replace("8.","<br>8.");
        })
        .catch(err => console.error(err));
}

searchBtn.addEventListener('click',(e)=>{

    e.preventDefault();
    dictionary(searchInput.value)
})

