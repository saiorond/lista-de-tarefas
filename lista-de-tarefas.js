const campoInput = document.querySelector("#tarefa");
const botao = document.querySelector("#inserir_tarefa");
console.log(campoInput, botao)

const mostraTarefa = document.querySelector(".mostrar_tarefa"); 

const validaInput = () => campoInput.value.trim().length > 0; 

function inserirTarefa() {
    const inputIsValid = validaInput();

    if (!inputIsValid) {
        return campoInput.classList.add("error");
    }

    const tarefaContainer = document.createElement("div");
    tarefaContainer.classList.add("tarefa-item");


    const tituloTarefa = document.createElement("h3");
    tituloTarefa.innerText = campoInput.value;

    const textoTarefa = document.createElement("input");
    textoTarefa.inputMode = campoInput.value;

    const iconeDelete = document.createElement("i");
    iconeDelete.classList.add("fa-solid");
    iconeDelete.classList.add("fa-trash-can");

    tarefaContainer.appendChild(tituloTarefa);
    tarefaContainer.appendChild(textoTarefa);
    tarefaContainer.appendChild(iconeDelete);

    mostraTarefa.appendChild(tarefaContainer);
};

function mudancaInput() {
    const inputValido = validaInput();

    if (inputValido) {
        return campoInput.classList.remove("error");
    }
};

//botao.addEventListener("click", () => inserirTarefa());
campoInput.addEventListener("change", () => mudancaInput());