const form = document.getElementById('form');
const username = document.getElementById('username');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const email = document.getElementById('email');


//Show input error messages
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'hai';
    const small = formControl.querySelector('small');
    small.innerText = message;
    small.color = message;
}

// show success colour
function showSucces(input) {
    const formControl = input.parentElement;
    formControl.className = 'x';
}

//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSucces(input)
    }else {
        showError(input,'Email is not invalid');
    }
}


//checkRequired fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        }else {
            showSucces(input);
        }
    });
}



//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




//Event Listeners
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username, email,subject,message]);
    checkLength(username,3,15);
    checkLength(message,3,15);
    checkLength(subject,10,30);
    checkEmail(email);
});