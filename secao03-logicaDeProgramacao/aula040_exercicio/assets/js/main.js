function scope(){
    const form = document.querySelector('.form');
    const result =document.querySelector('.result');

    function handleSubmit(event){
        event.preventDefault();
        const weightPeople = (form.querySelector('.weight-people'));
        const heightPeople = (form.querySelector('.height-people'));

        console.log(weightPeople);

        const IMC = (weightPeople.value/(heightPeople.value**2));

        if(weightPeople.value){
            if(heightPeople.value){
                calcularImc(IMC);
            }else{ result.innerHTML += "<p> Altura inválida</p>"}
        }else{ result.innerHTML += "<p> Peso inválida</p>"}

        
    }
    
    function calcularImc(IMC){
        if(IMC < 16){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Magreza grave) </p>`
        }else if(IMC>16 && IMC < 17){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Magreza moderada) </p>`
        }else if(IMC>17 && IMC < 18.5){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Magreza leve) </p>`
        }else if(IMC>18.5 && IMC < 24.9){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Peso normal) </p>`
        }else if(IMC>24.9 && IMC < 29.9){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Sobrepeso) </p>`
        }else if(IMC>29.9 && IMC < 34.9){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1) </p>`
        }else if(IMC>34.9 && IMC < 39.9){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2) </p>`
        }else if(IMC>40){
            result.innerHTML += `<p>Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 3) </p>`
        }else{
            result.innerHTML += `<p> Resultado inválido </p>`
        }
    }
    form.addEventListener('submit', handleSubmit);
}

scope();
