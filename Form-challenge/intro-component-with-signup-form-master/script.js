
 
const FirstName = document.querySelector('#firstName').value.trim();
const lastName = document.querySelector('#LastName').value.trim();
const email = document.querySelector('#Email').value;
const passWord = document.querySelector('#password').value;
const errorMsg = document.querySelectorAll('.error-text');
const errorIcon = document.querySelectorAll('.error-icon');


 
const submit = document.querySelector('#form');
   

submit.addEventListener('submit', (e) => {

    e.preventDefault (); 
    validatingForm () ;     

});

function validatingForm () {
     if(FirstName === '') {
          errorIcon[0].style.display = 'block';
          errorMsg[0].style.display = 'block';

          }else{
               errorIcon[0].style.display = 'none';
               errorMsg[0].style.display = 'none';

          }

     if(lastName === '') {
          errorIcon[1].style.display = 'block';
          errorMsg[1].style.display = 'block';
     
          }else{
               errorIcon[1].style.display = 'none';
               errorMsg[1].style.display = 'none';
     
          }
     if(email === '') {
          errorIcon[2].style.display = 'block';
          errorMsg[2].style.display = 'block';
     
          }else{
               errorIcon[2].style.display = 'none';
               errorMsg[2].style.display = 'none';
     
          }
     if(passWord === '') {
          errorIcon[3].style.display = 'block';
          errorMsg[3].style.display = 'block';
     
          }else{
               errorIcon[3].style.display = 'none';
               errorMsg[3].style.display = 'none';
     
          }

     }



    
     











