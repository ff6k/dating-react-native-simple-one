export const getOldYear = (date) => {
    const now = new Date()
    return now.getUTCFullYear() - new Date(date).getUTCFullYear()
}