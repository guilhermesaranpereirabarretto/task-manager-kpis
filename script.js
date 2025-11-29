//Onde fica a lógica do sistema (funções, interações, adicionar tarefas etc).//

/* Função para atualizar KPIs */
function updateKPIs() {
    const tasks = document.querySelectorAll("#taskList li");
    const total = tasks.length;

    const completed = document.querySelectorAll("#taskList li.completed").length;

    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("progress").textContent = progress + "%";
}

/* Função para adicionar tarefa */
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return alert("Digite algo!");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    // Ao clicar, marca como concluída
    span.onclick = () => {
        li.classList.toggle("completed");
        updateKPIs();
    };

    const del = document.createElement("button");
    del.textContent = "Excluir";
    del.onclick = () => {
        li.remove();
        updateKPIs();
    };

    li.appendChild(span);
    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateKPIs();
}