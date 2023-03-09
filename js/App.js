
const btnedu = document.querySelector('.tab-links3') 
const tabedu = document.querySelector('.tab-edu');

const btn = document.querySelector('.tab-links2');
const div = document.querySelector('.tab-exp');

const btn2 = document.querySelector('.tab-links');
const div2 = document.querySelector('.tab-contents');
let monitorOccupied = false;


btn2.addEventListener("click", () => {
    if (div2.style.display === "none") {
      
      div.style.display = "none";
      tabedu.style.display = 'none';
      div2.style.display = "block";
    } else {
      div2.style.display = "none";
    }
  });



btn.addEventListener("click", () => {
    if (div.style.display === "none") {
      div2.style.display = "none";
      tabedu.style.display = 'none';
      div.style.display = "block";
      monitorOccupied = true;
    } else {
      div.style.display = "none";
      monitorOccupied = false;
    }
  });


btnedu.addEventListener('click', () =>{ 
    if(tabedu.style.display === 'none'){
      div2.style.display = "none";
      div.style.display = "none";
        tabedu.style.display  = 'block'
    }
    else {
        tabedu.style.display = 'none';
    }
})





// const tablinks = document.querySelector('.tab-contents');  /// button
// const tablinkexp = document.querySelector('.tab-exp');
// const tablinkedu = document.querySelector('.tab-edu');


// function showOrHide(){
//     if(Clicked == 1){
//         tablinks.style.display = 'block';
//         Clicked = 0;
//     }
//     else{
//         tablinks.style.display = 'none';
//     }
// }

// let showOrHide = function (){
//     if(Clicked){
//         tablinks.style.display = 'block';
//         Clicked = false;
//     }else {
//         tablinks.style.display = 'none';
//         Clicked = true;
//     }
// }

// let showOrHide2 = function (){
//     if(Clicked){
//         tablinkexp.style.display = 'block';
//         Clicked = false;
//     } else {
//         tablinkexp.style.display = 'none';
//         Clicked = true;
//     }
// }

// let showOrHide3 = function () {
//     if(Clicked){
//         tablinkedu.style.display = 'block';
//         Clicked = false;
//     } else {
//         tablinkedu.style.display = 'none';
//         Clicked = true;
//     }
// }



