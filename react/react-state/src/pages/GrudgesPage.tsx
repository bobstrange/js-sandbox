import React, { FC, useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { GrudgeList } from '../components/GrudgeList'

import { Grudge, fetchGrudges } from '../models/grudge'
import { NewGrudge } from '../components/NewGrudge'

export const GrudgesPage: FC = () => {
  const [grudges, setGrudges] = useState<Grudge[]>([])

  useEffect(() => {
    ;(async () => {
      setGrudges(await fetchGrudges())
    })()
  }, [])
  return (
    <Layout>
      <NewGrudge />
      <GrudgeList grudges={grudges} />
    </Layout>
  )
}
