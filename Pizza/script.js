let pre_img2=document.querySelector('.home-pizza')
let pre_img3=document.querySelectorAll('.all .s1 .pre-img .ingredients img')

setTimeout(function(){
    pre_img2.style.animation="s1-img2 1s 1 linear forwards"
},1000)

function pre_img3_animation(){
    for(let i=0;i<pre_img3.length;i++){
        pre_img3[i].style.animation="s1-img3 0.9s 1 linear forwards"
    }
}
setTimeout(function(){
    pre_img3_animation()
},3000)





for(let i = 0;i<100;i++){
    let img1=document.querySelector('.s3-img .img1').cloneNode(true);
    let img2=document.querySelector('.s3-img .img2').cloneNode(true);
    let img3=document.querySelector('.s3-img .img3').cloneNode(true);
    let s3_img= document.querySelector(".s3-img");
    s3_img.appendChild(img1);
    s3_img.appendChild(img2);
    s3_img.appendChild(img3);

}
for(let f=0 ; f<100;f++){
    let img1=document.querySelector('.s3-img .img1').cloneNode(true);
    let img2=document.querySelector('.s3-img .img2').cloneNode(true);
    let img3=document.querySelector('.s3-img .img3').cloneNode(true);
    let s3_img= document.querySelector(".s3-img");
    let prev = s3_img.children[0];
    s3_img.insertBefore(img1,prev);
    s3_img.insertBefore(img2,prev);
    s3_img.insertBefore(img3,prev);
}
