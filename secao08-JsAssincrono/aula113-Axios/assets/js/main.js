//* Aula 113 - Fetch API e Axios (JSON)

/* 
  _Nota

*/

axios('pessoas.json')
  .then(resposta => carregaElemento(resposta.data))

// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElemento(json));


  function carregaElemento(json){
    const table = document.createElement('table');

    const trTitulo = document.createElement('tr');
    const tdTitulo1 = document.createElement('td');
    tdTitulo1.innerHTML = "nome";

    trTitulo.appendChild(tdTitulo1);
    table.appendChild(trTitulo);

    const tdTitulo2 = document.createElement('td');
    tdTitulo2.innerHTML = "idade";
    trTitulo.appendChild(tdTitulo2);
    table.appendChild(trTitulo);

    const tdTitulo3 = document.createElement('td');
    tdTitulo3.innerHTML = "salario";
    trTitulo.appendChild(tdTitulo3);
    table.appendChild(trTitulo);

    for(let pessoa of json){
      const tr = document.createElement('tr');

      let td = document.createElement('td');
      td.innerHTML = pessoa.nome;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = pessoa.idade;
      tr.appendChild(td);

      td = document.createElement('td');
      td.innerHTML = pessoa.salario;
      tr.appendChild(td);

      table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);

  }
