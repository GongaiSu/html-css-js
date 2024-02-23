import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export function formatDate(date: string, format: string = 'YYYY/MM/DD hh:mm:ss') {
  return dayjs(date).utc().utcOffset(8).format(format)
}
