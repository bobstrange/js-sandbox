import React, { FC, useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { GrudgeList } from '../components/GrudgeList'
import { v4 as uuid } from 'uuid'

import { Grudge, fetchGrudges } from '../models/grudge'
import { NewGrudge } from '../components/NewGrudge'

export const GrudgesPage: FC = () => {
  const [grudges, setGrudges] = useState<Grudge[]>([])

  const addGrudge = ({
    person,
    reason,
  }: {
    person: string
    reason: string
  }) => {
    const grudge = {
      person,
      reason,
      id: uuid(),
      forgiven: false,
    }
    setGrudges([...grudges, grudge])
  }

  useEffect(() => {
    ;(async () => {
      setGrudges(await fetchGrudges())
    })()
  }, [])
  return (
    <Layout>
      <NewGrudge onSubmit={addGrudge} />
      <GrudgeList grudges={grudges} />
    </Layout>
  )
}
