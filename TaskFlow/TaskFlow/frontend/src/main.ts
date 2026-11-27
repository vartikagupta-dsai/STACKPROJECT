
import './style.css'

const API_URL = 'http://localhost:5000'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app">
    <header class="header">
      <h1>TaskFlow</h1>
      <p>Manage your tasks easily</p>
    </header>

    <main class="container">
      <div class="task-form">
        <input
          type="text"
          id="taskInput"
          placeholder="Enter a new task..."
        />
        <button id="addTask">Add Task</button>
      </div>

      <div class="task-section">
        <h2>My Tasks</h2>
        <div id="taskList">Loading tasks...</div>
      </div>
    </main>
  </div>
`

const taskInput = document.querySelector<HTMLInputElement>('#taskInput')!
const addTask = document.querySelector<HTMLButtonElement>('#addTask')!
const taskList = document.querySelector<HTMLDivElement>('#taskList')!

// Display tasks from MongoDB
async function loadTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`)

    if (!response.ok) throw new Error('Could not load tasks')

    const tasks = await response.json()

    taskList.innerHTML = ''

    tasks.forEach((task: { _id: string; title: string }) => {
      createTaskElement(task)
    })

    if (tasks.length === 0) {
      taskList.textContent = 'No tasks yet. Add your first task!'
    }
  } catch (error) {
    console.error(error)
    taskList.textContent = 'Unable to load tasks. Check your backend.'
  }
}

// Create task element
function createTaskElement(task: { _id: string; title: string }) {
  const taskItem = document.createElement('div')
  taskItem.className = 'task-item'

  const title = document.createElement('span')
  title.textContent = task.title

  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-btn'
  deleteButton.textContent = 'Delete'

  deleteButton.addEventListener('click', async () => {
    try {
      const response = await fetch(
        `${API_URL}/tasks/${task._id}`,
        { method: 'DELETE' }
      )

      if (!response.ok) throw new Error('Delete failed')

      await loadTasks()
    } catch (error) {
      alert('Unable to delete task!')
      console.error(error)
    }
  })

  taskItem.append(title, deleteButton)
  taskList.appendChild(taskItem)
}

// Add task to MongoDB
addTask.addEventListener('click', async () => {
  const title = taskInput.value.trim()

  if (!title) {
    alert('Please enter a task!')
    return
  }

  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title })
    })

    if (!response.ok) throw new Error('Could not add task')

    taskInput.value = ''
    await loadTasks()
  } catch (error) {
    alert('Unable to add task! Check your backend.')
    console.error(error)
  }
})

// Load saved tasks when website opens
loadTasks()
