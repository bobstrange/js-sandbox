import React, { FC, useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { GrudgeList } from '../components/GrudgeList'

import { Grudge, fetchGrudges } from '../models/grudge'

export const GrudgesPage: FC = () => {
  const [grudges, setGrudges] = useState<Grudge[]>([])

  useEffect(() => {
    ;(async () => {
      setGrudges(await fetchGrudges())
    })()
  }, [])
  return (
    <Layout>
      <GrudgeList grudges={grudges} />
    </Layout>
  )
}
