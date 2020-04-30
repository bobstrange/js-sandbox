import React, { FC, Fragment } from 'react'
import { Repo } from '../../types/Repo'

interface RepoItemProps {
  repo: Repo
}

export const RepoItem: FC<RepoItemProps> = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  )
}
