const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for(let p of ps){
    p.style.backgroundColor=backgroundColorBody
    p.style.color = '#ffffff';
    //? Aqui white não funcionou, buscar usar com a # ou rgb
    console.log(p.style.backgroundColor, p);
}