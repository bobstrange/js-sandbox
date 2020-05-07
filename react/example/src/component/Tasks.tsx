import React, { FC, Component } from 'react'

interface Task {
  title: string
}
interface TasksProps {
  tasks: Task[]
}
interface TasksState {
  tasks: Task[]
}

// export const Tasks: FC<TasksProps> = ({ tasks }) => {
//   return (
//     <ul>
//       {
//         tasks.map((task, i) => {
//           return <li key={i}>{task.title}</li>
//         })
//       }
//     </ul>
//   )
// }

export class Tasks extends Component<
  TasksProps,
  TasksState
> {

  constructor(props: TasksProps) {
    super(props)
    this.state = {
      tasks: props.tasks
    }
  }

  addNewTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: 'New task'
        }
      ]
    })
  }

  render() {
    const { tasks } = this.state
    return (
      <div className='TaskList'>
        <ul>
          {
            tasks.map((task, i) => {
              return <li key={i}>{task.title}</li>
            })
          }
        </ul>
        <button onClick={this.addNewTask}>Add new task</button>
      </div>
    )
  }
}
