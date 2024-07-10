
const cardHolders = [
    'John Doe',
    'Jane Doe',
    'Alice Smith',
    'Bob Smith',
    'Charlie Brown',
    'David Brown',
    'Eve Green',
    'Frank Green',
    'Grace Black',
    'Harry Black',
];

const cardNumber = Math.floor(Math.random() * 10000000000000000).toString();
const cardType = ['Visa', 'MasterCard', 'American Express', 'Discover'][Math.floor(Math.random() * 4)];

/**
 * Generates a mock credit card number or details.
 * @param type - The type of credit card information to generate. Can be either 'number' or 'details'.
 * @returns If type is 'number', returns a mock credit card number. If type is 'details', returns an object containing mock credit card details.
 */
export default function generateCreditCard(type: 'number' | 'details') {

    if (type === 'number') {
        return cardNumber;
    }

    return {
        cardHolder: cardHolders[Math.floor(Math.random() * cardHolders.length)],
        cardNumber,
        cardType,
        expiry: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        cvv: Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
    };
}