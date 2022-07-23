//const date = new Date();

//const ano = date.getFullYear();
//const dia = date.getDate();
//const mes = date.getMonth() + 1;

//function formatarData(date, format) {
//    formatDate(today, 'dd/mm/aa');

//    format.replace('dd',getDate())
//    format.replace('mm', date.getMonth() + 1)
//    format.replace('aa', date.getFullYear())
//}

const input = document.querySelector("#tarefa");
const botao = document.querySelector("#inserir_tarefa");

const validaInput = () => input.value.trim().length > 0; 

function addTarefa() {
    const inputIsValid = validaInput();

    if (!inputIsValid) {
        return input.classList.add("error");
    }
}

function mudancaInput() {
    const inputIsValid = validaInput();

    if (inputIsValid) {
        return input.classList.remove("error");
    }
}

botao.addEventListener("click", () => addTarefa());
input.addEventListener("change", () => mudancaInput());