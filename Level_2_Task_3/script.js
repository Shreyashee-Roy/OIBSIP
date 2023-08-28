const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (e) => {
  (e.keyCode === 13 ? addList(e) : null);
});

function addList(e) {
  const taskList = document.querySelector('.notCompleted');
  const completedList = document.querySelector('.Completed');

  const newLi = document.createElement('li');
  const checkBtn = document.createElement('button');
  const delBtn = document.createElement('button');

  checkBtn.innerHTML = '<i class="fa fa-check"></i>';
  delBtn.innerHTML = '<i class="fa fa-trash"></i>';

  if (input.value !== '') {
    newLi.textContent = input.value;
    input.value = '';
    taskList.appendChild(newLi);
    newLi.appendChild(checkBtn);
    newLi.appendChild(delBtn);
  }

  checkBtn.addEventListener('click', function () {
    const parent = this.parentNode;
    parent.classList.toggle('completed');
    checkBtn.style.display = 'none';
    updateCompletedList();
  });

  delBtn.addEventListener('click', function () {
    const parent = this.parentNode;
    if (parent.parentNode === completedList) {
      parent.remove();
    } else {
      parent.remove();
      updateCompletedList();
    }
  });
}

function updateCompletedList() {
  const completedList = document.querySelector('.Completed');
  completedList.innerHTML = '';

  const completedTasks = document.querySelectorAll('.notCompleted li.completed');
  completedTasks.forEach(task => {
    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');

    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    newLi.textContent = task.textContent;

    newLi.appendChild(delBtn);

    completedList.appendChild(newLi);

    delBtn.addEventListener('click', function () {
      const parent = this.parentNode;
      parent.remove();
      
      if (parent.parentNode === completedList) {
        updateCompletedList();
      }
    });
  });
}

updateCompletedList();
