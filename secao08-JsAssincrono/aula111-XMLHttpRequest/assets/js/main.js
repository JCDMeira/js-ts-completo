//* Aula 111 - XMLHttpRequest (GET) + promise

/*
    #Nota#
*/

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true)
    xhr.send(); //? Se acaso fosse um método post teria algum dado aqui, 
    //? mas só irá ser feito get nesse caso

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    })
  })

  //_ Código abaixo seria para modelo antigo, sem promise
  // const xhr = new XMLHttpRequest();
  // xhr.open(obj.method, obj.url, true)
  // xhr.send(); //? Se acaso fosse um método post teria algum dado aqui, 
  //             //? mas só irá ser feito get nesse caso

  // xhr.addEventListener('load', ()=>{
  //   if(xhr.status >= 200 && xhr.status < 300){
  //     obj.success(xhr.responseText);
  //   }else{
  //     obj.error(xhr.statusText);
  //   }
  // })
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (e.target.innerText === "HOME") {
    e.preventDefault();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = "";
    return
  }

  if (tag === 'a') {
    e.preventDefault();


    carregaPagina(el);
  }
})

function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href,

    //_ Código abaixo seria para modelo antigo, sem promise
    // success(response) {
    //   carregaResultado(response);
    // },
    // error(errorText) {
    //   console.log(errorText);
    // }
  };

  request(objConfig)
    .then(response => {
    carregaResultado(response);
    })
    .catch(error => console.log(error));

    /*
    _ Se a função fosse assincrona (async) se poderia fazer uso de chamadas await
      ex:
      try{
      const response = await request(objConfig);
      carregarResultado(response);
      } catch(e){
        console.log(e);
      }

    */
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
