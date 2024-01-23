const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const titulo = document.querySelector('.titulo');

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

    const loop = setInterval(() => {
        
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        if (pipePosition <= 110 && pipePosition > 0 && marioPosition < 80){
            pipe.style.animation = 'none'
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none'
            mario.style.bottom = `${marioPosition}px`;
            
            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
        
            clearInterval (loop);
        }

    }, 10);