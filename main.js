// Show Hide Navigation 
const menu = document.querySelector(".nav__menu"); 
const openBtn = document.querySelector("#open-menu");
const closeBtn = document.querySelector("#close-menu");

 openBtn.addEventListener('click', () => {
    menu.style.display = "flex"; 
    closeBtn.style.display = "inline-block"; 
    openBtn.style.display = "none"; 
 });

 // Close Nav Menu
 const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "inline-block"; 
 }

 closeBtn.addEventListener('click', closeNav); 

 // Edit Project Title By Pen
 document.getElementById("edit-pen").onclick = function() {
   document.querySelector('.title-input').classList.add('input-active'); 

   var disabled = document.getElementById("edit-title").disabled;
   if (disabled) {
      document.getElementById("edit-title").disabled = false;
   }
   else {
      document.getElementById("edit-title").disabled = true;
   }
}

 // Edit Project Title By Close-Edit
 document.getElementById("close-edit").onclick = function() {
   document.getElementById("edit-title").value = "Project_Apr_21 12.30pm";
   document.querySelector('.title-input').classList.remove('input-active'); 

   var disabled = document.getElementById("edit-title").disabled;
   if (disabled) {
      document.getElementById("edit-title").disabled = false;
   }
   else {
      document.getElementById("edit-title").disabled = true;
   }
}

 // Edit Project Title By Ok-Edit
 document.getElementById("ok-edit").onclick = function() {
   document.querySelector('.title-input').classList.remove('input-active'); 

   var disabled = document.getElementById("edit-title").disabled;
   if (disabled) {
      document.getElementById("edit-title").disabled = false;
   }
   else {
      document.getElementById("edit-title").disabled = true;
   }
}

// Show Ok-Edit and Close-Edit  
const editPen = document.querySelector("#edit-pen"); 
const closeEdit = document.querySelector("#close-edit");
const okEdit = document.querySelector("#ok-edit");

 editPen.addEventListener('click', () => {
    closeEdit.style.display = "inline-block"; 
    okEdit.style.display = "inline-block"; 
    editPen.style.display = "none"; 
});

// Hide Ok-Edit and Close-Edit  
  const showPenEdit = () => {
   closeEdit.style.display = "none";
   okEdit.style.display = "none";
   editPen.style.display = "inline-block"; 
}

closeEdit.addEventListener('click', showPenEdit); 
okEdit.addEventListener('click', showPenEdit); 

// Modal Popup-2
const modal2 = document.querySelector('.modal2');
const overlay2 = document.querySelector('.overlay2'); 
const closeModalBtn2 = document.querySelector('.close-modal2');
const showModalBtns2 = document.querySelectorAll('.show-modal2'); 
// const browseImg = document.querySelector('.browse-img');

const closeModal2 = () => {
   modal2.classList.add('hidden');
   overlay2.classList.add('hidden');
   modal1.classList.add('hidden'); 
}

for(let i = 0; i < showModalBtns2.length; i++) {
   console.log(showModalBtns2[i].textContent); 

   showModalBtns2[i].addEventListener('click', function() {
      document.getElementById("modal2-title").innerText = showModalBtns2[i].textContent; 
      modal2.classList.remove('hidden'); 
      overlay2.classList.remove('hidden'); 
      // browseImg.classList.remove('hidden'); 
   }); 
}

closeModalBtn2.addEventListener('click', closeModal2);
overlay2.addEventListener('click', closeModal2);

// Modal Popup-1
const modal1 = document.querySelector('.modal1');
const showModalBtns1 = document.querySelector('.show-modal1');
const closeModalBtn1 = document.querySelector('.close-modal1');

showModalBtns1.addEventListener('click', function() {
   modal1.classList.remove('hidden'); 
   overlay2.classList.remove('hidden'); 
   // browseImg.classList.remove('hidden'); 
}); 

closeModalBtn1.addEventListener('click', closeModal2);


// Make Selected Browse Box Active
const makeActive = document.querySelectorAll('.browse__box');  

makeActive.forEach(item => {
   item.addEventListener('click', () => {
      makeActive.forEach(ele => ele.classList.remove('browse__active'));
      // this.classList.add('browse__active'); 
   }); 
});

for(let i = 0; i < makeActive.length; i++) {
   console.log("Make-Active= ", makeActive[i].textContent); 

   makeActive[i].addEventListener('click', () => {
      // makeActive[0].classList.remove('browse__active'); 
      makeActive[i].classList.add('browse__active'); 
   });
}

// Add Right Tick to Browse Modal-1 
const modal1Active = document.querySelectorAll('.table__data'); 
const showTick = document.querySelectorAll('.show-tick');

// showTick.forEach(item => {
//    item.addEventListener('click', () => {
//       showTick.forEach(ele => ele.classList.remove('show-tick'));
//    }); 
// });

for(let i = 0; i < modal1Active.length; i++) {
   console.log("modal1-Active= ", modal1Active[i].textContent); 

   modal1Active[i].addEventListener('click', () => { 
      modal1Active[i].classList.add('madal1__active'); 
      showTick[i].classList.remove('hidden'); 
   });
}


