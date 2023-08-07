const buttonTwo = document.querySelector('.btn-2');

buttonTwo.addEventListener('click', alertTwo);

function alertTwo(){
    alert('I also love javascript');
};

const boxeThree = document.querySelector('.boxes-box-3');

boxeThree.addEventListener('mouseover', change);

function change(){
    boxeThree.style.backgroundColor = 'blue';
}


