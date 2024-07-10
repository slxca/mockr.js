


/**
 * Generates a random IPv6 address.
 * 
 * @returns {string} The generated IPv6 address.
 */
export default function generateIPv6() {
    
    const block1 = Math.floor(Math.random() * 65536).toString(16);
    const block2 = Math.floor(Math.random() * 65536).toString(16);
    const block3 = Math.floor(Math.random() * 65536).toString(16);
    const block4 = Math.floor(Math.random() * 65536).toString(16);
    const block5 = Math.floor(Math.random() * 65536).toString(16);
    const block6 = Math.floor(Math.random() * 65536).toString(16);
    const block7 = Math.floor(Math.random() * 65536).toString(16);
    const block8 = Math.floor(Math.random() * 65536).toString(16);

    return `${block1}:${block2}:${block3}:${block4}:${block5}:${block6}:${block7}:${block8}`;
}