let moveBy = 10;
let myPix = document.getElementById('pixel');


window.addEventListener('load', () => {
myPix.style.position = 'absolute';
myPix.style.left = 0;
myPix.style.top = 0;
});


myPix.addEventListener('click', () => {
    console.log("heh")
})

window.addEventListener('keydown', (event) => {
    console.log("he")
    if(event.key === 'ArrowRight') {
        myPix.style.left = `${parseInt(myPix.style.left) + moveBy}px`;
    } 
    if(event.key === 'ArrowDown') {
        myPix.style.top = `${parseInt(myPix.style.top) + moveBy}px`;      
    }
    if(event.key === 'ArrowLeft') {
        if(myPix.style.left>0) {
        myPix.style.left = `${parseInt(myPix.style.left) - moveBy}px`;  
        console.log(myPix.style.left)           
        }
    }
    if(event.key === 'ArrowUp') {
        myPix.style.top = `${parseInt(myPix.style.top) - moveBy}px`;      
    }
});

/*
window.addEventListener('keydown', (event) => {
    console.log("he")
    switch (event.key){
        case 'ArrowUp':
            myPix.style.top = `${parseInt(style.top) - moveBy}px`;
        break;
        case 'ArrowDown':
            myPix.style.top = `${parseInt(style.top) + moveBy}px`;
        break;
        case 'ArrowLeft':
            myPix.style.left = `${parseInt(style.left) - moveBy}px`;
        break;
        case 'ArrowRight':
            myPix.style.left = `${parseInt(style.left) + moveBy}px`;
        break;
    }
})
*/