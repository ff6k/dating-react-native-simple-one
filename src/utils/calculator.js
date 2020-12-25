import Utils from '/src/utils'
import Const from '/src/const'
export const getOldYear = (date) => {
    const now = new Date()
    return now.getUTCFullYear() - new Date(date).getUTCFullYear()
}

export const getFormatDayFlexible = (messageSent) => {
    const date = new Date(messageSent)
    const today = new Date()
    if (date.getUTCFullYear() === today.getUTCFullYear()) {
        if (date.getUTCMonth() === today.getUTCMonth()) {
            if (date.getUTCDate() === today.getUTCDate()) {
                return Utils.Format.formatDateUTC(date, Const.DateFormat.TIME)
            }
            else {
                return Utils.Format.formatDateUTC(date, Const.DateFormat.MONTH_DAY)
            }
        } else {
            return Utils.Format.formatDateUTC(date, Const.DateFormat.MONTH_DAY)
        }
    } else {
        return Utils.Format.formatDateUTC(date, Const.DateFormat.DATE_LONG)
    }
}