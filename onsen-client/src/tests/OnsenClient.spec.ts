import { OnsenClient } from "../OnsenClient";

describe('OnsenClient', () => {
  test('fetchPrograms', async () => {
    const client = new OnsenClient()
    const programs = await client.fetchPrograms()
    console.log(programs[0])
    expect(programs[0].id).toEqual(94)
  })
})

