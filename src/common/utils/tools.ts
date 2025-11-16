import  dayjs from "dayjs";

export function formatDate(
    date: string | number | Date,
    formatStr = 'YYYY-MM-DD HH:mm:ss'
): string {
    return dayjs(date).format(formatStr);
}