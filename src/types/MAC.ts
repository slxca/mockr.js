

/**
 * Generates a random MAC address.
 * 
 * @returns A string representing a MAC address in the format "XX:XX:XX:XX:XX:XX".
 */
export default function generateMAC() {
    const block1 = Math.floor(Math.random() * 256).toString(16);
    const block2 = Math.floor(Math.random() * 256).toString(16);
    const block3 = Math.floor(Math.random() * 256).toString(16);
    const block4 = Math.floor(Math.random() * 256).toString(16);
    const block5 = Math.floor(Math.random() * 256).toString(16);
    const block6 = Math.floor(Math.random() * 256).toString(16);

    return `${block1}:${block2}:${block3}:${block4}:${block5}:${block6}`;
}