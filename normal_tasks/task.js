let allStars = document.querySelectorAll('form .fa-star') ;
let choosenStar  ;
for(let i = 0 ; i< allStars.length ;i++){
    allStars[i].addEventListener("click" ,(ele)=>{
        choosenStar = i ;
        for(let j = 0 ;j<= i ;j++){
            allStars[j].style.color = "#ffae00";
        }
        for(let j = i+1 ; j< allStars.length ;j++){
            allStars[j].style.color = "#dedede" ;
        }
    })
}

document.forms[0].onsubmit = (ele)=>{
    // take name and brief input
    let name = document.querySelector(`#name`).value ;
    let brief = document.querySelector(`#brief`).value ;

    // index of the choosen star = choosenStar
    let card = document.createElement('div') ;
    card.className = "card" ;
    
    let readed = document.querySelector('#readed').checked; 
    
    if(readed == true){
        card.style.background = "#c4c4c4" ;
    }    
    
    // start of the fucked img
    let imgInput = document.querySelector(`#image`) ;
    let imgele = document.createElement(`img`) ;
    if(imgInput.files[0]){
        imgele.src = URL.createObjectURL(imgInput.files[0]) ;
    }
    card.appendChild(imgele) ;



    // append the text
    let text = document.createElement('div') ;
    text.className = "text" ;
    text.innerHTML = `<h3>${name}</h3> <p>${brief}</p>` ;
    card.appendChild(text) ;

    // append stars
    let stars = document.createElement('div') ;
    stars.className = 'stars' ;
    stars.innerHTML = `
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>` ;

    let starsChildren = stars.children ;
    
    for(let i = 0 ; i <= choosenStar ;i++){
        starsChildren[i].style.color = "#ffc500" ;
    }

    card.appendChild(stars) ;
    let del = document.createElement('div') ;
    del.className = "delete" ;
    del.textContent = "Delete" ;
    card.appendChild(del) ;

    document.querySelector('.books').appendChild(card) ;


    return false;
}


document.addEventListener("click" , (ele)=>{
    if(ele.target.className == "delete"){
        ele.target.parentElement.remove() ;
    }
})