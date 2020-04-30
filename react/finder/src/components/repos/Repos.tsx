import React, { FC, Fragment } from 'react'
import { Repo } from '../../types/Repo'
import { RepoItem } from './RepoItem'

interface ReposProps {
  repos: Repo[]
}

export const Repos: FC<ReposProps> = ({ repos }) => {
  const reposDom = repos.map((repo) => {
    return (<RepoItem repo={repo} key={repo.id} />)
  })
  return (
    <Fragment>
      {reposDom}
    </Fragment>
  )
}
