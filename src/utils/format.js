import moment from "moment";
import Const from '/src/const'

export const formatDate = (date, dateFormat) => {
    const dateFM = dateFormat ? dateFormat : Const.DateFormat.DATE
    return moment(date).format(dateFM);
}

export const formatDateUTC = (date, dateFormat) => {
    const dateFM = dateFormat ? dateFormat : Const.DateFormat.DATE
    return moment(date).utc().format(dateFM)
}

export const formatTime = (date) => {
    return moment(date).format(Const.DateFormat.TIME);
}

export const formatPhone = (phone, code) => {
    return code + phone.slice(1, phone.length)
}