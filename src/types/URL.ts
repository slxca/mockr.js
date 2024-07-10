



/**
 * Generates a random URL.
 * @returns {string} The generated URL.
 */
export default function generateURL() {
  return `https://example.com/${Math.random().toString(36).substring(7)}`;
}