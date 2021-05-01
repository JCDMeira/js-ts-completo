//* Aula 112 - Fetch API (GET)

/*
    _#Nota#
    _ A requisição fetch por padrão já cria uma promise, que deve ser capturada
    _ pelo .then e ser tratada, o primeiro passo no geral é converter os dados 
    _ para texto e isso atuará como outra promise. (cada then pode responder com
    _ uma promise)
    _ como no exemplo a seguir já se sabia que a resposta que viria pelo fetch
    _ se tratava de um texto que era um HTML, se foi nomeado no segundo .then 
    _ o parâmetro como HTML.
*/

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

async function carregaPagina(el) {
  
  try{
    
  const href = el.getAttribute('href');

  /*
      #OBS# 
      # Aqui ao tratar o código como assincrono fica mais evidente que
      # o retorno do fetch será outra promise, pois ao se declara 
      # que na chamada do response.text() o uso do await novamente
      # e então se trata de uma nova promise criada pela estrutura do
      # fetch. Que após ser resolvida da origem ao html que será 
      # carregado.
      
    */
  
  const response = await fetch(href);

  if(response.status !== 200) throw new Error('Erro 404!')
  
  const html = await response.text();
  carregaResultado(html)
  
  } catch(e){
    console.error(e)
  };

    //_ modelo abaixo é sem funções assincronas
    // fetch(href)
    //   .then(response =>{
    //     if(response.status !== 200) throw new Error('Erro 404!')
    //     return response.text()
    //   })
    //   .then(html => carregaResultado(html))
    //   .catch(e => console.error(e));
    

}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}


//_ Exemplo de uso com a requisição fetch
// fetch('pagina1.html')
//   .then(resposta => {
//     if(resposta.status !== 200) throw new Error('Erro 404 nosso');
//     return resposta.text();
//   })
//     .then(html => console.log(html))
//   .catch(e => console.error(e))
