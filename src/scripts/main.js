document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById('form')
    const spanError = document.getElementById('spanError')
    const successMessage = document.getElementById('successMessage')
    const userEmail = document.getElementById('userEmail')
    const formSection = document.getElementById('formSection')
    const dismissBtn = document.getElementById('dismissBtn')
    
    form.addEventListener('submit', function(e){
        const inputEmail = document.getElementById('inputEmail')
        e.preventDefault()
        if(inputEmail.value === '' || !inputEmail.checkValidity()){
            inputEmail.classList.add('input-error')
            spanError.classList.add('span-error')
            spanError.style.display = 'block'
        }
        else{
            inputEmail.classList.remove('input-error')
            spanError.classList.remove('span-error')
            spanError.style.display = 'none'

            userEmail.textContent = inputEmail.value
            formSection.style.display = 'none'
            successMessage.style.display = 'block'
        }
    })

    dismissBtn.addEventListener('click', function(){
        formSection.style.display = 'block'
        successMessage.style.display = 'none'
        form.reset()
    })
})