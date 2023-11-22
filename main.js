


const form = document.getElementById('form');


form.addEventListener('submit', function(event){

    event.preventDefault();

    const aulas = document.getElementById('aulas').value;
   

    const bmi = ((aulas * 80)).toFixed(2);

  

    value.classList.add('attention');
    
    document.getElementById('infos').classList.remove('hidden');
    
    value.textContent = bmi.replace('.',',' );
    
   
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});