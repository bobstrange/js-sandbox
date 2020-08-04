import { OnsenClient } from "../OnsenClient";

describe('OnsenClient', () => {
  test('fetchPrograms', async () => {
    const client = new OnsenClient()
    const programs = await client.fetchPrograms()
    const targetDirectoryName = 'toshitai'
    const program = programs.find((program) => program.directory_name === targetDirectoryName)

    if (program) {
      const { id, directory_name, display, title, image, list, delivery_interval, delivery_day_of_week, category_list, pay, performers, related_links, related_programs, contents } = program
      expect(id).toEqual(17)
      expect(directory_name).toEqual('toshitai')
      expect(title).toEqual('セブン-イレブン presents 佐倉としたい大西')
      expect(display).toBeTruthy()
    } else {
      throw `Test is broken ${targetDirectoryName} should exist`
    }
  })
})

