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

    tituloTarefa.addEventListener("click", () => concluirTarefa(tituloTarefa));

    const textoTarefa = document.createElement("input");
    textoTarefa.inputMode = campoInput.value;

    const iconeDelete = document.createElement("i");
    iconeDelete.classList.add("fa-solid");
    iconeDelete.classList.add("fa-trash-can");

    iconeDelete.addEventListener("click", () => deletarTarefa())

    tarefaContainer.appendChild(tituloTarefa);
    tarefaContainer.appendChild(textoTarefa);
    tarefaContainer.appendChild(iconeDelete);

    mostraTarefa.appendChild(tarefaContainer);
    
    campoInput.value = "";
};

function concluirTarefa(tituloTarefa) {
    const tasks = mostraTarefa.childNodes;

    for (const task of tasks) {
        if(task.firstChild.isSameNode(tituloTarefa)) {
            task.firstChild.classList.toggle("completed");
        }
    }
}

function mudancaInput() {
    const inputValido = validaInput();

    if (inputValido) {
        return campoInput.classList.remove("error");
    }
};

//botao.addEventListener("click", () => inserirTarefa());
campoInput.addEventListener("change", () => mudancaInput());