'use strict';
let so = Math.trunc(Math.random() * 20);
let diem = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let doanSo = document.querySelector('.guess').value;
  if (!doanSo) document.querySelector('.message').textContent = '⛔ No Value';

  if (diem > 0) {
    if (doanSo == so) {
      document.querySelector('.message').textContent = '🎉You Win';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = so ;
if(diem>highscore) highscore=diem;
    document.querySelector('.highscore').textContent=highscore;

    } else if (doanSo > so) {
      document.querySelector('.message').textContent = '☝ Too high';
      diem--;
    } else if (doanSo < so) {
      document.querySelector('.message').textContent = '👇 Too low';
      diem--;
    }

    document.querySelector('.score').textContent = diem;
    

  } 
  else {
    document.querySelector('.message').textContent = '⛔You Lose';
  }
});

document.querySelector('.again').addEventListener("click",function(){
    so = Math.trunc(Math.random() * 20);
    console.log(so);
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?' ;
    diem = 20;
    document.querySelector('.guess').textContent="";
    document.querySelector('body').style.backgroundColor = '#222';
    


})
