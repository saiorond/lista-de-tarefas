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

    iconeDelete.addEventListener("click", () => deletarTarefa(tarefaContainer, tituloTarefa));

    tarefaContainer.appendChild(tituloTarefa);
    tarefaContainer.appendChild(textoTarefa);
    tarefaContainer.appendChild(iconeDelete);

    mostraTarefa.appendChild(tarefaContainer);
    
    campoInput.value = "";

    atualizaLocalStoroge()
};

function concluirTarefa(tituloTarefa) {
    const tasks = mostraTarefa.childNodes;

    for (const task of tasks) {
        if(task.firstChild.isSameNode(tituloTarefa)) {
            task.firstChild.classList.toggle("completed");
        }
    }

    atualizaLocalStoroge()
}

function deletarTarefa(tarefaContainer, tituloTarefa) {
    const tasks = mostraTarefa.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(tituloTarefa)) {
            tarefaContainer.remove()
        }
    }

    atualizaLocalStoroge()
}

function mudancaInput() {
    const inputValido = validaInput();

    if (inputValido) {
        return campoInput.classList.remove("error");
    }
};

function atualizaLocalStoroge() {
    const tasks = mostraTarefa.childNodes;

    const localStorageTarefas = [... tasks].map((task) => {
        const content = task.firstChild;
        const tarefaCompleta = content.classList.contains("completed");

        return { description: content. innerText, tarefaCompleta};
    });

    localStorage.setItem("tasks", JSON.stringify(localStorageTarefas));
}

    function atualizaTarefas() {
        const tarefasNoLocalStorage = JSON.parse(localStorage.getItem("tasks"))
    
        for(const tasks of tarefasNoLocalStorage) {
            const tarefaContainer = document.createElement("div");
            tarefaContainer.classList.add("tarefa-item");


            const tituloTarefa = document.createElement("h3");
            tituloTarefa.innerText = task.description;

            if(task.tarefaCompleta) {
                tituloTarefa.classList.add("completed");
            }

            tituloTarefa.addEventListener("click", () => concluirTarefa(tituloTarefa));

            const textoTarefa = document.createElement("input");
            textoTarefa.inputMode = campoInput.value;

            const iconeDelete = document.createElement("i");
            iconeDelete.classList.add("fa-solid");
            iconeDelete.classList.add("fa-trash-can");

            iconeDelete.addEventListener("click", () => deletarTarefa(tarefaContainer, tituloTarefa));

            tarefaContainer.appendChild(tituloTarefa);
            tarefaContainer.appendChild(textoTarefa);
            tarefaContainer.appendChild(iconeDelete);

            mostraTarefa.appendChild(tarefaContainer);
        }
    }  

    atualizaTarefas();

//botao.addEventListener("click", () => inserirTarefa());
campoInput.addEventListener("change", () => mudancaInput());