import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = "show-error-message";

const form = document.querySelector(".form") as HTMLFormElement;
const username = document.querySelector(".username") as HTMLInputElement;
const email = document.querySelector(".email") as HTMLInputElement;
const password = document.querySelector(".password") as HTMLInputElement;
const password2 = document.querySelector(".password2") as HTMLInputElement;

const submitEvent =(event: Event)=>{
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    hideErrorMessages(target);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    if(shouldSendForm(target)) console.log("Formulário enviado");

};

form.addEventListener("submit", submitEvent);

function checkForEmptyFields(...inputs: HTMLInputElement[]): void{
    inputs.forEach(input => {
        if(!input.value) showErroMessage(input, "Este campo não pode ficar vazio");
    });
}

function checkEmail(input: HTMLInputElement): void{
    if(!isEmail(input.value)) showErroMessage(input, "Email inválido");
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement){
    if(password.value !== password2.value){
        showErroMessage(password, "As senhas não são iguais");
        showErroMessage(password2, "As senhas não são iguais");
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll("."+SHOW_ERROR_MESSAGES)
        .forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES));

}

function showErroMessage(input: HTMLInputElement, msg: string): void {
    const formFileds = input.parentElement as HTMLDivElement;
    const errorMessage = formFileds.querySelector(".error-message") as HTMLSpanElement;

    errorMessage.innerHTML = msg;
    formFileds.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean{
    let send = true;
    form.querySelectorAll("."+SHOW_ERROR_MESSAGES).forEach(()=> (send = false));
    return send;
}
