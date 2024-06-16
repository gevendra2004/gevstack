/*=============== EMAIL VALIDATION ===============*/
const form = document.getElementById('form'),
      email = document.getElementById('email'),
      pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

email.addEventListener('input', () => {

   // Evaluates if it matches the pattern values
   if (email.value.match(pattern)) {
      form.classList.add('valid')
      form.classList.remove('invalid')
   } else {
      form.classList.add('invalid')
      form.classList.remove('valid')
   }
 
   // If the input field is empty, delete classes
   if (email.value == '') {
      form.classList.remove('invalid')
      form.classList.remove('valid')
   }
})