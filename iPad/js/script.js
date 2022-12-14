/* -----------poster slide 1,2----------- */
const slide1 = document.getElementById("ipad__main7__animate1");
const slide2 = document.getElementById("ipad__main7__animate2");

let final = '-2250px'
let stops = '0px'

let abcd = setInterval(function () {

    slide1.animate({
        transform: `translateX(${final})`
    }, {
        duration: 1500000,
        easing: 'ease',
        iterations: 1,
        fill: 'both',

    });

    slide2.animate({
        transform: 'translateX(-2330px)'
    }, {
        duration: 800000,
        easing: 'ease',
        iterations: 1,
        fill: 'both',
    });

}, 200);


/* -----------music album slide----------- */
const slides = document.querySelector('#ipad__main7__musicWrap ul');
const musicStop = document.querySelector('#ipad__music__stop');
const musicPlay = document.querySelector('#ipad__music__play');

const musicColor = document.querySelector('#ipad__main7__sec3');
const musicTitleS = musicColor.querySelector('.ipad__font__paragraph');
const musicLink = musicColor.querySelectorAll('.ipad__icon__learn');

const musicImg = document.querySelector('#ipad__logo__music');
const musicWrap = document.querySelector('#ipad__main7__animate3');
const musicDetaili = musicWrap.querySelectorAll('.ipad__music__detail');

let color1 = '';
let color2 = '';
let color3 = '';
let combo = '';
let logo = '';
let count = 1;

function colorRandom() {
    color1 = Math.round(Math.random() * 256);
    color2 = Math.round(Math.random() * 256);
    color3 = Math.round(Math.random() * 256);

    combo = `rgb(${color1}, ${color2}, ${color3})`
    musicColor.style.backgroundColor = `${combo}`
    musicDetaili[count].style.backgroundColor = `rgb(${color1-100}, ${color2-100}, ${color3-100})`;

    count++;

    // 색상의 밝음 어두움에 따라서
    if ((color1 + color2 + color3) / 3 > 150) {
        logo = `apple_music.png`;

        if (musicTitleS.classList.contains('ipad__color__white')) {
            musicTitleS.classList.remove('ipad__color__white')
            musicLink[0].classList.remove('ipad__color__white')
            musicLink[1].classList.remove('ipad__color__white')
        }

    } else {
        logo = `apple_music_w.png`
        if (!musicTitleS.classList.contains('ipad__color__white')) {
            musicTitleS.classList.add('ipad__color__white')
            musicLink[0].classList.add('ipad__color__white')
            musicLink[1].classList.add('ipad__color__white')
        }

    }
    musicImg.style.backgroundImage = `url(image/main7/${logo})`
}

// 1번 바로 실행
colorRandom();

let currentSlide = 0;
let slide = slides.querySelectorAll('li');
let slide3Fn = function () {
    // center css 처리
    slide[currentSlide + 2].className = ('ipad__item__centered')
    slide[currentSlide + 1].classList.remove('ipad__item__centered')

    // rga 랜덤으로 생성
    colorRandom();


    let from = -(238.63 * currentSlide);
    let to = from - 238.63;

    slides.animate({
        marginLeft: [from + 'px', to + 'px'],
    }, {
        duration: 1500,
        easing: 'ease-out',
        iterations: 1,
        fill: 'both',
    });

    // 애니메이션이 끝나면 현재 위치를 증가
    currentSlide++;
}

let animate3 = setInterval(slide3Fn, 2500);

musicStop.addEventListener('click', function () {
    clearInterval(animate3)
    musicStop.classList.remove('on')
    musicPlay.classList.add('on')
})

musicPlay.addEventListener('click', function () {
    animate3 = setInterval(slide3Fn, 2000)
    musicStop.classList.add('on')
    musicPlay.classList.remove('on')
})


if (musicStop.classList.contains('on')) {
    musicWrap.addEventListener('mouseenter', function () {
        if (!ipad__music__play.classList.contains('on')) {
            clearInterval(animate3)
        }
    })

    musicWrap.addEventListener('mouseleave', function () {
        if (!ipad__music__play.classList.contains('on')) {
            animate3 = setInterval(slide3Fn, 2000)
        }
    })
} 
