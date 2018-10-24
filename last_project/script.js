window.addEventListener('load', function(){
    const APIKey = 'ea6df922e9f512edbdfb25fc578b76e4';
    const city = 'Minsk';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
    let xhr = new XMLHttpRequest();
    class Person{
        constructor(name){
            this.name = name;
            this.happiness = 0;
        }
    }
    const form = document.forms[0];
    form.onsubmit = function(e){
        e.preventDefault();
        const PersonName = form.elements.name.value;
        const Pers = new Person(PersonName);
        if (form.elements.cat.value == 'yes'){
            Pers.happiness++;
        }
        if (form.elements.rest.value == 'yes'){
            Pers.happiness++;
        }
        if (form.elements.money.value == 'yes'){
            Pers.happiness++;
        }
        
        
        xhr.open('GET', url, false);
        xhr.send();
        if (xhr.status != 200){
            console.log(xhr.status + ' ' + xhr.statusText);
        } else{
            let DATA = JSON.parse(xhr.responseText);
            if ((DATA.main.temp - 273) > 15){
                Pers.happiness++;    
            }
        }
        document.querySelector('.personName').innerHTML = Pers.name;
        if (Pers.happiness == 4){
            document.querySelector('.icon').innerHTML = "😁";
        } else if ((Pers.happiness == 3) || (Pers.happiness == 2)){
            document.querySelector('.icon').innerHTML = "😐";
        } else{
            document.querySelector('.icon').innerHTML = "☹️";
        }
    }
})