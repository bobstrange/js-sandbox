import dayjs from 'dayjs'

/**
 * 2 つの日付の間隔を返す
 *
 * @param {Date} from
 * @param {Date} to
 */
export const diffTwoDays = (from, to) => {
  const fromDay = dayjs(from)
  const toDay = dayjs(to)
  return toDay.diff(fromDay, 'days')
}
