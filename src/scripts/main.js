document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById('form')
    const btnForm = document.getElementById('inputBtn')
    
    const spanError = document.getElementById('spanError')
    
    form.addEventListener('input', function(e){
        const email = document.getElementById('inputEmail')
        
        e.preventDefault()


        if(email.value === '' || !email.checkValidity()){
            email.classList.add('input-error')
            spanError.classList.add('span-error')
            spanError.style.display = 'block'
        }
        else{
            email.classList.remove('input-error')
            spanError.classList.remove('span-error')
            spanError.style.display = 'none'
        }


    })




})