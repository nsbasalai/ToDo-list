const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('.btn-primary');
const deleteDoneButton = document.querySelector('#removeDoneTasks');


class CreateRemind {
    constructor() {
        this.renderRemind();
        this.deleteRemind();
        this.markAsDone();
        this.checkAvailableTasks();
        this.deleteDone();
    }

    renderRemind() {
        let value = taskInput.value;
        document.querySelector('#tasksList').insertAdjacentHTML('beforeend', `
        <li class="list-group-item d-flex justify-content-between task-item">
                        <span class="task-title">${value}</span>
                        <div class="task-item__buttons">
                            <button type="button" data-action="done" class="btn-action">
                                <img src="./img/tick.svg" alt="Done" width="18" height="18">
                            </button>
                            <button type="button" data-action="delete" class="btn-action">
                                <img src="./img/cross.svg" alt="Done" width="18" height="18">
                            </button>
                        </div>
                    </li>
        `);
        taskInput.value = '';
    }

    deleteRemind() {
        const deleteButtons = document.querySelectorAll('[data-action="delete"]');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.parentElement.parentElement.remove();
                this.checkAvailableTasks();
            })

        });
    }

    markAsDone() {
        const markButtons = document.querySelectorAll('[data-action="done"]');
        markButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.parentElement.parentElement.querySelector('.task-title').classList.add('task-title--done');
            })
        });
    }

    checkAvailableTasks() {
        if (document.querySelector('.task-item')) {
            document.querySelector('#emptyList').classList.add('hidden');
        } else {
            document.querySelector('#emptyList').classList.remove('hidden');
        }
    }

    deleteDone() {
        deleteDoneButton.addEventListener('click', () => {
            document.querySelectorAll('.task-title--done').forEach(tasks => {
                tasks.parentElement.remove();
            });
            this.checkAvailableTasks();
        })
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let remind = new CreateRemind();
});
