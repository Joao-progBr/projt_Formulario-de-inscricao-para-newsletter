class EmailForm {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.inputEmail = this.form.querySelector('#inputEmail');
    this.spanError = document.querySelector('#spanError');
    this.userEmail = document.querySelector('#userEmail');
    this.formSection = document.querySelector('#formSection');
    this.successMessage = document.querySelector('#successMessage');
    this.dismissBtn = document.querySelector('#dismissBtn');
    this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.init();
  }

  get email() {
    return this.inputEmail.value;
  }

  isValidEmail() {
    return this.emailRegex.test(this.email);
  }

  showError() {
    this.inputEmail.classList.add('input-error');
    this.spanError.classList.add('span-error');
    this.spanError.style.display = 'block';
    this.inputEmail.focus();
  }

  hideError() {
    this.inputEmail.classList.remove('input-error');
    this.spanError.classList.remove('span-error');
    this.spanError.style.display = 'none';
  }

  showSuccessMessage() {
    this.userEmail.textContent = this.email;
    this.formSection.style.display = 'none';
    this.successMessage.style.display = 'block';
  }

  resetForm() {
    this.formSection.style.display = 'block';
    this.successMessage.style.display = 'none';
    this.form.reset();
  }

  init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.isValidEmail() ? (this.hideError(), this.showSuccessMessage()) : this.showError();
    });

    this.dismissBtn.addEventListener('click', () => {
      this.resetForm();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new EmailForm('#form');
});


// document.addEventListener('DOMContentLoaded',function(){

//     const form = document.getElementById('form')
//     const successMessage = document.getElementById('successMessage')
//     const userEmail = document.getElementById('userEmail')
//     const formSection = document.getElementById('formSection')
//     const dismissBtn = document.getElementById('dismissBtn')
//     const spanError = document.getElementById('spanError')
//     const inputEmail = document.getElementById('inputEmail')
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
//     form.addEventListener('submit', function(e){
//         e.preventDefault()
//         if(inputEmail.value === '' || !emailRegex.test(inputEmail.value)){
//             inputEmail.classList.add('input-error')
//             spanError.classList.add('span-error')
//             spanError.style.display = 'block'
//             inputEmail.focus()
//         }
//         else{
//             inputEmail.classList.remove('input-error')
//             spanError.classList.remove('span-error')
//             spanError.style.display = 'none'

//             userEmail.textContent = inputEmail.value
//             formSection.style.display = 'none'
//             successMessage.style.display = 'block'
//         }
//     })

//     dismissBtn.addEventListener('click', function(){
//         formSection.style.display = 'block'
//         successMessage.style.display = 'none'
//         form.reset()
//     })
// })



