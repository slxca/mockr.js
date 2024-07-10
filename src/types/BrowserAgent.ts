
const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera', 'IE'];
const operatingSystems = ['Windows', 'Mac', 'Linux', 'Android', 'iOS'];

/**
 * Generates a random browser agent string.
 * @returns {string} The generated browser agent string.
 */
export default function generateBrowserAgent() {
    const browser = browsers[Math.floor(Math.random() * browsers.length)];
    const version = Math.floor(Math.random() * 10) + 1;
    const os = operatingSystems[Math.floor(Math.random() * operatingSystems.length)];
    const osVersion = Math.floor(Math.random() * 10) + 1;

    return `${browser}/${version} (${os} ${osVersion})`;
}