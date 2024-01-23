const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const titulo = document.querySelector('.titulo');

//contador
var contador = 0;
var pipeCompleteAnimation = document.getElementById('pipe');

pipeCompleteAnimation.addEventListener('animationiteration', function() {
  contador++;
  document.getElementById('display-score').textContent = 'Score: ' + contador;
});

document.addEventListener('click', function() {
    titulo.style.color = 'transparent';
    titulo.style.background = 'none';
    var mario = document.getElementById('mario');
    mario.classList.add('jump');
    setTimeout(function() {
        mario.classList.remove('jump');
      }, 1000);
    });

document.addEventListener('keydown', function() {
    titulo.style.color = 'transparent';
    titulo.style.background = 'none';
    var mario = document.getElementById('mario');        
    mario.classList.add('jump');
    setTimeout(function() {
        mario.classList.remove('jump');
          }, 1000);
    });

//loop para checagem se o jogo acabou ou nao
    
    const loop = setInterval(() => {
        
        //criando a integracao html js
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        //condição para acabar o jogo

        if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80){
            mario.src = './images/game-over.png';
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`;
            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`;
            mario.style.width = '75px';  
            mario.style.marginLeft = '50px';
            clearInterval (loop);
            alert('Você morreu! sua pontuação : ' + contador)
            location.reload()
            
        }
    }, 10);

