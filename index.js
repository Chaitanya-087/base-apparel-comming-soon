const btn = document.querySelector('button');
const form = document.querySelector('form');
const error_image = document.querySelector('.error');
const error_message = document.querySelector('.error-message');
//(yourname) @ (domain) . (extension)(.again) 
//sparkscj23131 @ gmail . com
//paper @ company . ac .in
form.addEventListener('submit',e => {
    e.preventDefault();
    const re = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")
    const userinput = document.querySelector('input');
    if ( ! re.test(String(userinput.value).toLowerCase()))
    {
        form.classList.add('error-border');
        error_image.classList.remove('hide');
        error_message.classList.remove('hide');
    }
    else{
        form.classList.remove('error-border');
        error_image.classList.add('hide');
        error_message.classList.add('hide');
    }
})