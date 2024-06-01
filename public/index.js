const submit = document.querySelector("#btn");
const lastName = document.querySelector("#last-name");
const firstName = document.querySelector("#first-name");
const email = document.querySelector("#email");


submit.addEventListener('click', (e) => {
    e.preventDefault();
    validate(firstName);
    validate(lastName);
    validate(email);
});

// function to check 
function validate(input) {
    switch (input) {
        case firstName:
            if (input.value == "") {
                input.style.border = '1px solid hsl(0, 66%, 54%)';
                input.placeholder = 'John'
                errorMessage(input);
            } else return true;
            break;

        case lastName:
            if (input.value == "") {
                input.style.border = '1px solid hsl(0, 66%, 54%)';
                input.placeholder = 'Doe'
                errorMessage(input);
            } else return true;
            break;

        case email:
            if (input.value == "") {
                input.style.border = '1px solid hsl(0, 66%, 54%)';
                errorMessage(input);
                input.placeholder = 'example@abc.com'
            } else return true;
            break;
    }
}
function errorMessage(input) {
    let p = document.createElement('p');
    switch (input) {
        case email:
            p.textContent = 'please input a valid email';
            // styling the error message
            p.style.color = 'hsl(0, 66%, 54%)';
            p.style.textAlign = 'right';
            p.style.marginTop = '5px';
        break;

        default:
            p.textContent = 'This field is required';
            // styling the error message
            p.style.color = 'hsl(0, 66%, 54%)';
            p.style.textAlign = 'right';
            p.style.marginTop = '5px';

        break;
    }
    input.after(p)
}