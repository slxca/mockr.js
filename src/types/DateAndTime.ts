

/**
 * Generates a date and time in either string or JSON format.
 * @param type - The format of the generated date and time. Can be 'string' or 'json'.
 * @returns The generated date and time in the specified format.
 */
export default function generateDateAndTime(type: 'string' | 'json') {
    const date = new Date();
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    const milliseconds = Math.floor(Math.random() * 1000);

    if(type === 'string') {
        return `${date.toISOString().split('T')[0]}T${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    } else {
        return {
            date: date.toISOString().split('T')[0],
            time: {
                hours,
                minutes,
                seconds,
                milliseconds
            }
        };
    }
}