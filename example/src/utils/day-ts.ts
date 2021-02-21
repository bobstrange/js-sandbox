import dayjs, { Dayjs } from 'dayjs'

const diff = (from: Dayjs, to: Dayjs) => {
  return to.diff(from, 'days')
}
