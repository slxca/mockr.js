

/**
 * Generates a random IPv4 address.
 * 
 * @returns {string} The generated IPv4 address.
 */
export default function generateIPv4() {

    const octet1 = Math.floor(Math.random() * 256);
    const octet2 = Math.floor(Math.random() * 256);
    const octet3 = Math.floor(Math.random() * 256);
    const octet4 = Math.floor(Math.random() * 256);

    return `${octet1}.${octet2}.${octet3}.${octet4}`;
}