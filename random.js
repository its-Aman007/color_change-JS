const randomcolor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalID;

const startChangingColor=function(){
    intervalID=setInterval(changeColor,1000);

    function changeColor(){
        document.body.style.backgroundColor=randomcolor();
    }
};
const stopChangingColor=function(){
    clearInterval(intervalID);
};

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
