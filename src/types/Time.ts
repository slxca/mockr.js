


/**
 * Generates a random string or JSON object representing a time.
 * @param type - The type of output to generate. Default is 'string'.
 * @returns A string representing a time in the format 'HH:MM:SS.SSS' if type is 'string',
 *          or an object with properties hours, minutes, seconds, and milliseconds if type is 'json'.
 */
export default function generateTime(type: 'string' | 'json' = 'string') {
    const hours = Math.floor(Math.random() * 24);
    const minutes = Math.floor(Math.random() * 60);
    const seconds = Math.floor(Math.random() * 60);
    const milliseconds = Math.floor(Math.random() * 1000);

    if(type === 'string') {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    } else {
        return {
            hours,
            minutes,
            seconds,
            milliseconds
        };
    }
}