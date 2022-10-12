/* -----------poster slide 1,2----------- */
const slide1 = document.getElementById("ipad__main7__animate1");
const slide2 = document.getElementById("ipad__main7__animate2");
// const pause = document.getElementById("ipad__main7_stop")
// console.log(slide1.offsetWidth.x)
// console.log(slide1.scrollWidth )

let final = '-2250px'
let stops = '0px'

let abcd = setInterval(function () {
    // console.log(slide1.getBoundingClientRect().x)
    // console.log(slide1.style)

    slide1.animate({
        transform: `translateX(${final})`
    }, {
        // timing options
        duration: 1500000,
        // duration: 50,
        easing: 'ease', // 애니메이션이 어떻게 실행될지
        iterations: 1,
        fill: 'both', // ??

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

// pause.addEventListener('click', function(){
//     console.log('abc')
// clearInterval(abcd)
// })


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

    // console.log((color1 + color2 + color3) / 3)
    musicDetaili[count].style.backgroundColor = `rgb(${color1-100}, ${color2-100}, ${color3-100})`;
    count++;

    // 색상의 밝음 어두움에 따라서
    if ((color1 + color2 + color3) / 3 > 150) {
        // if (color1 > 128 || color2 > 128 || color3 > 128) {
        logo = `apple_music.png`;

        if (musicTitleS.classList.contains('ipad__color__white')) {
            musicTitleS.classList.remove('ipad__color__white')
            musicLink[0].classList.remove('ipad__color__white')
            musicLink[1].classList.remove('ipad__color__white')
        }
        // musicTitleS.classList.add('ipad__color__white')
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
        duration: 1500, // 시간값
        easing: 'ease-out', // 애니메이션이 어떻게 실행될지
        iterations: 1, // 무한으로
        fill: 'both', // ??
    });

    // 애니메이션이 끝나면 현재 위치를 증가
    currentSlide++;

    // console.log(currentSlide)
    // 다시 처음 위치가 되면 초기화
    // if (currentSlide === slide.length - 1) {
    //     currentSlide = 0;
    //     console.log('여기댜')
    // }

    // let slideCur = musicWrap.querySelector('.ipad__item__centered')
    // console.log(slideCur)

    // let next = slideCur.parentElement.children[0]
    // let next2 = slideCur.parentElement.children[1] 
    // console.log(next)
    // console.log(next2)

    // if(slide[currentSlide] == slideCur.parentElement.firstElementChild){
    //     currentSlide = 0;
    // }
    // if(currentSlide > 3){
    //     if (slideCur.nextElementSibling.nextElementSibling == null) {
    //         // slideCur.nextElementSibling = ;
    //         slideCur.parentElement.appendChild(next);
    //         slideCur.parentElement.appendChild(next2);
    //         slide = slides.querySelectorAll('li');
    //     }

    // }
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
        clearInterval(animate3)
    })

    musicWrap.addEventListener('mouseleave', function () {
        animate3 = setInterval(slide3Fn, 2000)
    })
}