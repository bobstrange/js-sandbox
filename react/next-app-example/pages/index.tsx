import React from "react";
import { NextPage } from "next";

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

interface Task {
  title: string
}

interface TasksPageProps {
  tasks: Task[]
}
const TasksPage: NextPage<TasksPageProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return (
          <li key={i}>{task.title}</li>
        )
      })}
    </ul>
  )
}

const tasks = [
  { title: 'Task one' },
  { title: 'Task two' }
]

TasksPage.getInitialProps = async () => ({ tasks })
export default TasksPage
