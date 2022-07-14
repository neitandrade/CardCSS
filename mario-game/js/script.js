//Queremos que a class mario receba e retire a class jump
//Quando a animação terminar, removemos a class jump

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        
        mario.classList.remove('jump');

    }, 600);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft; //pegar a posição do pipe
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px', ''); 
    //converter px pra numero, pra realizar calculos, bota + na frente)
    const cloudsPosition = clouds.offsetLeft




    if (pipePosition <= 70 && pipePosition > 0 & marioPosition < 70) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px` //a posição bottom do mario vai ser exata do momento que encostou no pipe
        
        mario.src = 'img/game-over.png'
        mario.style.width = '50px'
        mario.style.marginLeft = '25px'
        
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px` //a posição das nuvens vai parar no exato lugar que o jogo encerrar

        

        //precisamos encerrar essa constante loop ao perder >
        clearInterval(loop);    

    }

}, 10)


document.addEventListener('keydown', jump) 
//ao pressionar tecla, vai acionar function jump
