let inputOne = document.querySelector('.btn1');
let inputTwo = document.querySelector('.btn2');
let inputThree = document.querySelector('.btn3');

let textOne = document.querySelector('.list1');
let textTwo = document.querySelector('.list2');
let textThree = document.querySelector('.list3');

let pos1=document.querySelector('.feedback__card._1');
let pos2=document.querySelector('.feedback__card._2');
let pos3=document.querySelector('.feedback__card._3');
let pos4=document.querySelector('.feedback__card._4 ');
let button=document.querySelector('._btn');
let feedback__card=document.querySelectorAll('.feedback__card');
const feedback_CLASSES=['_1','_2','_3','_4'];
const feedback=[pos1,pos2,pos3,pos4];

feedback__card.forEach((item)=>{
    item.onclick=()=>{
        feedback.unshift(feedback.pop())
        feedback.forEach((item,index)=>{
            item.classList.remove(feedback_CLASSES.at(index-1));
            item.classList.add(feedback_CLASSES.at(index));
        })
    }
} )

button.addEventListener('click',function (){
 feedback__card.forEach((item,index)=>{
     item.style.transform=`none`;
     item.style.position='static';

 })
    button.style.display ='none';
})






document.querySelectorAll('.advantage').forEach(card => {
    card.addEventListener('mouseover', () => {
        const staticEmoji = card.querySelector('.static-emoji');
        const animatedEmoji = card.querySelector('.animated-emoji');
        staticEmoji.style.display = 'none';
        animatedEmoji.style.display = 'block';
    });

    card.addEventListener('mouseout', () => {
        const staticEmoji = card.querySelector('.static-emoji');
        const animatedEmoji = card.querySelector('.animated-emoji');
        staticEmoji.style.display = 'block';
        animatedEmoji.style.display = 'none';
    });
});

inputOne.addEventListener('click', function () {
    inputOne.classList.add('blue');
    inputTwo.classList.remove('blue');
    inputThree.classList.remove('blue');

    textOne.style.translate = '0%'
    textTwo.style.translate = '100%'
    textThree.style.translate = '200%'
})

inputTwo.addEventListener('click', function () {
    inputOne.classList.remove('blue');
    inputThree.classList.remove('blue');
    inputTwo.classList.add('blue');
    textOne.style.translate = '-150%'
    textTwo.style.translate = '-100%'
    textThree.style.translate = '50%'

})

inputThree.addEventListener('click', function () {
    inputOne.classList.remove('blue');
    inputTwo.classList.remove('blue');
    inputThree.classList.add('blue');
    textOne.style.translate = '-150%'
    textTwo.style.translate = '-250%'
    textThree.style.translate = '-200%'
})


