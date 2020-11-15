const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let estadoInit = false;
let segundos = 0;
let timer;

function iniciaContador(segundos) {
  let contador = new Date(segundos*1000);  //? a data é recebida a partir de milissegundos, por isso o x1000
  return contador.toLocaleTimeString('pt-Br', {
    hour12: false,
    timeZone: 'UTC',
  })
}

function ativaTimer() {
  timer = setInterval(function () {
    segundos++;
    console.log(iniciaContador(segundos));
    relogio.innerText = iniciaContador(segundos);
  }, 1000);
}


iniciar.addEventListener('click', function (event) {
  if(estadoInit) return;
  ativaTimer();
  estadoInit = true;
  relogio.classList.remove('pausado');
})

zerar.addEventListener('click', function (event) {
  relogio.innerText = '00:00:00';
  clearInterval(timer);
  segundos = 0;
  estadoInit = false;
  relogio.classList.remove('pausado');
})

pausar.addEventListener('click', function (event) {
  clearInterval(timer);
  estadoInit = false;
  relogio.classList.add('pausado');
})