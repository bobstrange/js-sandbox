import React, { FC } from 'react'

interface Task {
  title: string
}
interface TasksProps {
  tasks: Task[]
}

export const Tasks: FC<TasksProps> = ({ tasks }) => {
  return (
    <ul>
      {
        tasks.map((task, i) => {
          return <li key={i}>{task.title}</li>
        })
      }
    </ul>
  )
}
