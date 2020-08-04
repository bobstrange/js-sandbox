import { OnsenClient } from "../OnsenClient";

describe('OnsenClient', () => {
  test('fetchPrograms', async () => {
    const client = new OnsenClient()
    const programs = await client.fetchPrograms()
    const targetDirectoryName = 'toshitai'
    const program = programs.find((program) => program.directory_name === targetDirectoryName)

    if (program) {
      const { id, directory_name, display, title, image, list, delivery_interval, delivery_day_of_week, category_list, pay, performers } = program
      expect(id).toEqual(17)
      expect(directory_name).toEqual('toshitai')
      expect(title).toEqual('セブン-イレブン presents 佐倉としたい大西')
      expect(display).toBeTruthy()
      expect(Object.keys(image)).toEqual(['url', 'h304', 'h198'])
      expect(list).toBeTruthy()
      expect(delivery_interval).toEqual('毎週火曜配信 / 超！A＆G＋：23時30分～24時（動画配信） ＜音泉＞：24時～（音声配信）＋音声ダケの特別コーナー有')
      expect(delivery_day_of_week).toEqual(2)
      expect(category_list).toEqual(['radio'])
      expect(pay).toBeFalsy()
      expect(performers).toEqual([
        {
          id: 55,
          name: '佐倉綾音'
        },
        {
          id: 259,
          name: '大西沙織'
        }
      ])
    } else {
      throw `Test is broken ${targetDirectoryName} should exist`
    }
  })
})

