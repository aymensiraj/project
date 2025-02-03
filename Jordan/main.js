let shoes = document.querySelector('.shoes img');
let air= document.querySelector('#air');
let jordan= document.querySelector('#jor');
let blazer= document.querySelector('#blaz');
let crater= document.querySelector('#crat');
let hippie= document.querySelector('#hipp');
let BuyShoes=document.querySelector('.s3 .shoes img');
let p1 =document.querySelector('.p1');
let p4 =document.querySelector('.p4');
let nav = Array.from(document.querySelectorAll('.liste ul li '));
let s2 = document.querySelector('.s2');
let shoesName = document.querySelector('.s3 .info h2');
let shoesPrice = document.querySelector('.s3 .info .price');
let gray = document.querySelector('.gray');
let black = document.querySelector('.black');

let buy = document.querySelector('.s3 .info .buy button');
let buyInfo = document.querySelector('.buy-info');
let X = document.querySelector('#X');




nav[0].classList.add('nav-active');
gray.onclick=function(){
     BuyShoes.src="img/air2.png";
}
black.onclick=function(){
     BuyShoes.src="img/air.png";
}
air.onclick=function(){
    shoes.style.animation="image-animation1 1s 1 linear forwards";
    shoes.src="img/air.png";
    BuyShoes.src="img/air.png";
    p1.innerHTML="119$";
    p4.innerHTML="AIR FORCE",
    shoesName.innerHTML="AIR FORCE";
    shoesPrice.innerHTML="119$";
    nav[0].classList.add('nav-active');
    nav[2].classList.remove('nav-active');
    nav[1].classList.remove('nav-active');
    nav[3].classList.remove('nav-active');
    nav[4].classList.remove('nav-active');
    gray.style.backgroundColor="darkblue";
    gray.style.backgroundColor="gray";
    black.style.backgroundColor="black";
    gray.onclick=function(){
         BuyShoes.src="img/air2.png";
    }
    black.onclick=function(){
         BuyShoes.src="img/air.png";
    }
}
jordan.onclick=function(){
    shoes.style.animation="image-animation2 1s 1 linear forwards";
    shoes.src="img/jordanV2.png";
    BuyShoes.src="img/jordanV2.png";
    p1.innerHTML="210$";
    p4.innerHTML="AIR JORDAN";
    shoesPrice.innerHTML="210$";
    shoesName.innerHTML="AIR JORDAN";
    nav[1].classList.add('nav-active');
    nav[0].classList.remove('nav-active');
    nav[2].classList.remove('nav-active');
    nav[3].classList.remove('nav-active');
    nav[4].classList.remove('nav-active');
    gray.style.backgroundColor="gray";
    black.style.backgroundColor="green";
    gray.onclick=function(){
         BuyShoes.src="img/jordanV2.png";
    }
    black.onclick=function(){
         BuyShoes.src="img/jordan2V2.png";
    }
}
blazer.onclick=function(){
    shoes.style.animation="image-animation3 1s 1 linear forwards";
    shoes.src="img/blazer.png";
    BuyShoes.src="img/blazer.png";
    p1.innerHTML="150$";
    p4.innerHTML="BLAZER";
    shoesPrice.innerHTML="150$";
    shoesName.innerHTML="BLAZER";
    nav[2].classList.add('nav-active');
    nav[0].classList.remove('nav-active');
    nav[1].classList.remove('nav-active');
    nav[3].classList.remove('nav-active');
    nav[4].classList.remove('nav-active');
    gray.style.backgroundColor="white";
    black.style.backgroundColor="green";
    gray.onclick=function(){
         BuyShoes.src="img/blazer.png";
    }
    black.onclick=function(){
         BuyShoes.src="img/blazer2.png";
    }
}
crater.onclick=function(){
    shoes.style.animation="image-animation4 1s 1 linear forwards";
    shoes.src="img/crater.png";
    BuyShoes.src="img/crater.png";
    p1.innerHTML="90$";
    p4.innerHTML="CRATER";
    shoesPrice.innerHTML="90$";
    shoesName.innerHTML="CRATER";
    nav[3].classList.add('nav-active');
    nav[0].classList.remove('nav-active');
    nav[1].classList.remove('nav-active');
    nav[2].classList.remove('nav-active');
    nav[4].classList.remove('nav-active');
    gray.style.backgroundColor="black";
    black.style.backgroundColor="burlywood";
    gray.onclick=function(){
         BuyShoes.src="img/crater.png";
    }
    black.onclick=function(){
         BuyShoes.src="img/crater2.png";
    }
}
hippie.onclick=function(){
    shoes.style.animation="image-animation5 1s 1 linear forwards";
    shoes.src="img/hippie.png";
    BuyShoes.src="img/hippie.png";
    p1.innerHTML="85$";
    p4.innerHTML="HIPPIE";
    shoesPrice.innerHTML="85$";
    shoesName.innerHTML="HIPPIE";
    nav[4].classList.add('nav-active');
    nav[0].classList.remove('nav-active');
    nav[1].classList.remove('nav-active');
    nav[3].classList.remove('nav-active');
    nav[2].classList.remove('nav-active');
    gray.style.backgroundColor="gray";
    black.style.backgroundColor="black";
    gray.onclick=function(){
         BuyShoes.src="img/hippie.png";
    }
    black.onclick=function(){
         BuyShoes.src="img/hippie2.png";
    }
}
let SizeShoes=Array.from(document.querySelectorAll('.s3 .info .size div '));
function active(){
    SizeShoes[0].onclick=function(){
        SizeShoes[0].classList.add('S-active');
        SizeShoes[1].classList.remove('S-active');
        SizeShoes[2].classList.remove('S-active');
    }
    SizeShoes[1].onclick=function(){
        
        SizeShoes[1].classList.add('S-active');
        SizeShoes[0].classList.remove('S-active');
        SizeShoes[2].classList.remove('S-active');
    }
    SizeShoes[2].onclick=function(){

        SizeShoes[2].classList.add('S-active');
        SizeShoes[1].classList.remove('S-active');
        SizeShoes[0].classList.remove('S-active');
    }
}
active()
buy.onclick=function(){
    buyInfo.style.display="block";
}
X.onclick=function(){
    buyInfo.style.display="none";
}
