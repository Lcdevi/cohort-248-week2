const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
//const btns = document.querySelectorAll(".btn");
const srcImg = document.querySelector("img");

const arrOfImg = [
    "img1.jpeg",  // 0
    "img2.jpeg",  // 1
    "img3.jpeg",  // 2
    "img4.jpeg"   // 3
];

var count = 0;

function handleClick(e){
    const btn = e.target;                  // target c'est l'élément qui a déclanché le event, ici, c'est donc
                                           // clik sur button prev ou click sur button next
    if (btn.id === "prev") {               // si on clique sur un bouton et que son ID est "prev"
        if (count === 0) {                 // si count = 0 
            count = arrOfImg.length - 1    // count est redéfini en count.length-1 pour atteindre la derniere de la liste
        } else  { count = count -1;}       // si count !0 count est redéfini en count-1 pour atteindre l'image suivante
    } else {                               // si ID est pas "prev" (donc next)                   
        if (count === arrOfImg.length-1) { // si count est la dernière image (length-1)
            count = 0;                     // count = 0 (on renvoi à la première image)
        } else { count = count +1;}        // sinon on ajoute +1 à count pour aller à l'image suivante
          
    }
    
    srcImg.src = "images/"+arrOfImg[count]; // on change la source de l'image avec l'array arrOgImg index count
}

prevBtn.onclick = handleClick;
nextBtn.onclick = handleClick;



/*
let i = 1;
prevBtn.addEventListener('click',() => {
  
    srcImg.src = "images/img"+[i+1] +".jpeg";
      i++;
})
*/

