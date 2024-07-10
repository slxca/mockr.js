
const swifts = [
    "AQABDE22XXX",
    "BNPAUS33XXX",
    "CTBAJPJTXXX",
    "DSBZAEADXXX",
    "EQFGDKDDXXX",
    "FBZAILIJXXX",
    "GEBAIDJAXXX",
    "HSBCHKHQXXX",
    "IBKBCHZZXXX",
    "JCBQJPJAXXX",
    "KDBZKRSEXXX",
    "LHBMMYKLXXX",
    "MEBLAEADXXX",
    "NTBOSGSGXXX",
    "OCBCMYKXXXX",
    "PUNBINBBXXX",
    "QNBQQAQAXXX",
    "RZTIAT2LXXX",
    "SCBLKENXXXX",
    "UBNBNL2AXXX"
]

/**
 * Generates a random SWIFT code.
 * @returns {string} A randomly generated SWIFT code.
 */
export default function generateSWIFT() {
    return swifts[Math.floor(Math.random() * swifts.length)];
}