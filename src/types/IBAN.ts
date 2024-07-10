
const countryCodes = [
    'AD', 'AE', 'AL', 'AT', 'AZ', 'BA', 'BE', 'BG', 'BH', 'BR', 'CH', 'CR', 'CY', 'CZ', 'DE', 'DK', 'DO', 'EE', 'ES', 'FI', 'FO', 'FR', 'GB', 'GE', 'GI', 'GL', 'GR', 'GT', 'HR', 'HU', 'IE', 'IL', 'IS', 'IT', 'JO', 'KW', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK', 'MR', 'MT', 'MU', 'NL', 'NO', 'PK', 'PL', 'PS', 'PT', 'QA', 'RO', 'RS', 'SA', 'SE', 'SI', 'SK', 'SM', 'TN', 'TR', 'UA', 'VG', 'XK'
];


/**
 * Generates a random International Bank Account Number (IBAN).
 * @returns {string} The generated IBAN.
 */
export default function generateIBAN() {
    const countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
    const checkDigits = Math.random().toString(36).substring(2, 4);
    const bankCode = Math.random().toString(36).substring(2, 6).toUpperCase();
    const accountNumber = Math.random().toString(36).substring(2, 12);
    return `${countryCode}${checkDigits}${bankCode}${accountNumber}`;
}