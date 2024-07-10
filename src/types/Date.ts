
/**
 * Generates a random date between the specified start and end dates.
 * If no start and end dates are provided, it generates a random date between the current date and a random past date.
 *
 * @param {Date} [start] - The start date.
 * @param {Date} [end] - The end date.
 * @returns {Date} - The generated random date.
 */
export default function generateDate(start?: Date, end?: Date) {
    if(start && end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    } else if(start) {
        return new Date(start.getTime() + Math.random() * (Date.now() - start.getTime()));
    } else if(end) {
        return new Date(Math.random() * (end.getTime() - Date.now()) + Date.now());
    } else {
        return new Date(Math.random() * Date.now());
    }
}