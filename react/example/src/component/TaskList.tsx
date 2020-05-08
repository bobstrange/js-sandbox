import React, { FC, Component } from 'react'
import { Task } from '../types/Task'

interface TaskListProps {
  tasks: Task[]
}
interface TaskListState {
  tasks: Task[]
}

// export const TaskList: FC<TaskListProps> = ({ tasks }) => {
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

export class TaskList extends Component<
  TaskListProps,
  TaskListState
> {

  constructor(props: TaskListProps) {
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
