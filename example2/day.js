import dayjs from 'dayjs'

/**
 *
 * @param {Date} from
 * @param {Date} to
 */
export const diffTwoDays = (from, to) => {
  const fromDayjs = dayjs(from)
  const toDayjs = dayjs(to)

  const result = fromDayjs.diff(toDayjs)
  return result
}
