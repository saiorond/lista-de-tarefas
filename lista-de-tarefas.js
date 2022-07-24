const campoInput = document.querySelector("#tarefa");
const botao = document.querySelector("#inserir_tarefa");
console.log(campoInput, botao)

const mostraTarefa = document.querySelector(".mostrar_tarefa"); 

const validaInput = () => campoInput.value.trim().length > 0; 

function addTarefa() {
    const inputIsValid = validaInput();

    console.log(inputIsValid)

    if (!inputIsValid) {
        return campoInput.classList.add("error");
    }

    const tarefaContainer = document.createElement('div');
    tarefaContainer.classList.add("tarefa-item");

    const textoTarefa = document.createElement("p");
    textoTarefa.innerHTML = campoInput.value;

    const iconeDelete = document.createElement("i");
    iconeDelete.classList.add("fa-solid");
    iconeDelete.classList.add("fa-trash-can");

    tarefaContainer.appendChild(textoTarefa);
    tarefaContainer.appendChild(iconeDelete);

    mostraTarefa.appendChild(tarefaContainer);
}

function mudancaInput() {
    const inputIsValid = validaInput();

    if (inputIsValid) {
        return campoInput.classList.remove("error");
    }
}

botao.addEventListener("click", () => addTarefa());
campoInput.addEventListener("change", () => mudancaInput());
console.log(addTarefa)