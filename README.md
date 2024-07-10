# mockr.js

mockr.js is a powerful and flexible library designed to simplify the process of generating mock data for testing and development purposes. It supports a wide range of data types, including names, addresses, emails, and much more, making it an ideal choice for developers looking to create realistic and varied datasets.

## Features

- **Wide Range of Data Types**: Generate mock data for names, emails, addresses, credit card numbers, and many other types.
- **Customizable**: Easily tailor the generated data to fit your specific needs.
- **Easy to Use**: Simple API and clear documentation to get you started quickly.
- **Open Source**: Freely available for personal and commercial use under the MIT license.

## Getting Started

### Prerequisites
- Node.js (version 20.x or higher recommended)

### Installation
To install mockr.js, run the following command in your project directory:
```sh
npm install mockr.js
# or
yarn add mockr.js
# or
bun add mockr.js
```



## Types
| Name          | Function                                        | Possible Variants                                   | Responses                             |
|---------------|-------------------------------------------------|-----------------------------------------------------|---------------------------------------|
| Address       | [`generateAddress()`](#generateAddress)         | 127                                                 | Street, City, ZIP, State, Country     |
| Browser Agent | [`generateBrowserAgent()`](#generateAddress)    | 3.000                                               | Browser Agent                         |
| Company       | [`generateCompany()`](#generateAddress)         | 3.317.520                                           | Name, Job Title, Department, Location |
| Contact       | [`generateContact()`](#generateContact)         | 8.498.675                                           | Email, Phone, Mobile, Fax             |
| Credit Card   | [`generateCreditCard()`](#generateCreditCard)   | 4.800.000.000.000.000.000.000.000                   | Holder, Number, Type, Expire, CVV     |
| Date          | [`generateDate()`](#generateDate)               | ∞                                                   | Date                                  |
| Date and Time | [`generateDateAndTime()`](#generateDateAndTime) | ∞                                                   | Date, Time                            |
| Domain        | [`generateDomain()`](#generateDomain)           | 50                                                  | Domain                                |
| Geolocation   | [`generateGeolocation()`](#generateGeolocation) | 9.007.199.254.740.992                               | Geolocation                           |
| IBAN          | [`generateIBAN()`](#generateIBAN)               | 3.656.158.440.062.976                               | IBAN                                  |
| IPv4          | [`generateIPv4()`](#generateIPv4)               | 4,294,967,296                                       | IPv4                                  |
| IPv6          | [`generateIPv6()`](#generateIPv6)               | 340.282.366.920.938.463.463.374.607.431.768.211.456 | IPv6                                  |
| MAC           | [`generateMAC()`](#generateMAC)                 | 281.474.976.710.656                                 | MAC                                   |
| Name          | [`generateName()`](#generateName)               | 9200                                                | First Name, Last Name                 |
| SWIFT         | [`generateSWIFT()`](#generateAddress)           | 20                                                  | SWIFT                                 |
| Time          | [`generateTime()`](#generateTime)               | 86,400,000                                          | Hour, Minute, Second, Millisecond     |
| Timezone      | [`generateTimezone()`](#generateTimezone)       | 139                                                 | Timezone                              |
| URL           | [`generateURL()`](#generateURL)                 | 78.364.164.096                                      | URL                                   |

## Contributing
We welcome contributions to mockr.js! If you're interested in helping improve the project.

## Support
If you encounter any issues or have questions, please file a bug report or feature request through our [GitHub Issues](https://github.com/slxca/mockr.js/issues).

## License
mockr.js is open-source software licensed under the [MIT license](LICENSE).
