const addresses = [
    {
      "streetAddress": "Hauptstraße 123",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10115",
      "country": "Germany"
    },
    {
      "streetAddress": "Domplatz 123",
      "city": "Munich",
      "state": "Bavaria",
      "zipCode": "80331",
      "country": "Germany"
    },
    {
      "streetAddress": "Rathausplatz 123",
      "city": "Hamburg",
      "state": "Hamburg",
      "zipCode": "20095",
      "country": "Germany"
    },
    {
      "streetAddress": "Friedrichstraße 123",
      "city": "Frankfurt",
      "state": "Hesse",
      "zipCode": "60311",
      "country": "Germany"
    },
    {
      "streetAddress": "Via Roma 123",
      "city": "Rome",
      "state": "Lazio",
      "zipCode": "00185",
      "country": "Italy"
    },
    {
      "streetAddress": "Piazza San Marco 123",
      "city": "Venice",
      "state": "Veneto",
      "zipCode": "30124",
      "country": "Italy"
    },
    {
      "streetAddress": "Corso Vittorio Emanuele 123",
      "city": "Milan",
      "state": "Lombardy",
      "zipCode": "20122",
      "country": "Italy"
    },
    {
      "streetAddress": "Piazza del Duomo 123",
      "city": "Florence",
      "state": "Tuscany",
      "zipCode": "50122",
      "country": "Italy"
    },
    {
      "streetAddress": "Calle de Alcalá 123",
      "city": "Madrid",
      "state": "Madrid",
      "zipCode": "28001",
      "country": "Spain"
    },
    {
      "streetAddress": "Rambla de Catalunya 123",
      "city": "Barcelona",
      "state": "Catalonia",
      "zipCode": "08007",
      "country": "Spain"
    },
    {
      "streetAddress": "Avenida da Liberdade 123",
      "city": "Lisbon",
      "state": "Lisbon",
      "zipCode": "1250-096",
      "country": "Portugal"
    },
    {
      "streetAddress": "Princes Street 123",
      "city": "Edinburgh",
      "state": "Scotland",
      "zipCode": "EH2 4BL",
      "country": "UK"
    },
    {
      "streetAddress": "O'Connell Street 123",
      "city": "Dublin",
      "state": "Leinster",
      "zipCode": "D01 A3C3",
      "country": "Ireland"
    },
    {
      "streetAddress": "George Street 123",
      "city": "Sydney",
      "state": "New South Wales",
      "zipCode": "2000",
      "country": "Australia"
    },
    {
      "streetAddress": "Collins Street 123",
      "city": "Melbourne",
      "state": "Victoria",
      "zipCode": "3000",
      "country": "Australia"
    },
    {
      "streetAddress": "Queen Street 123",
      "city": "Auckland",
      "state": "North Island",
      "zipCode": "1010",
      "country": "New Zealand"
    },
    {
      "streetAddress": "Church Street 123",
      "city": "Toronto",
      "state": "Ontario",
      "zipCode": "M5B 2A2",
      "country": "Canada"
    },
    {
      "streetAddress": "Yonge Street 123",
      "city": "Toronto",
      "state": "Ontario",
      "zipCode": "M4W 2H1",
      "country": "Canada"
    },
    {
      "streetAddress": "Rue Saint-Honoré 123",
      "city": "Paris",
      "state": "Île-de-France",
      "zipCode": "75001",
      "country": "France"
    },
    {
      "streetAddress": "Avenue des Champs-Élysées 123",
      "city": "Paris",
      "state": "Île-de-France",
      "zipCode": "75008",
      "country": "France"
    },
    {
      "streetAddress": "Place Vendôme 123",
      "city": "Paris",
      "state": "Île-de-France",
      "zipCode": "75001",
      "country": "France"
    },
    {
      "streetAddress": "Boulevard Haussmann 123",
      "city": "Paris",
      "state": "Île-de-France",
      "zipCode": "75008",
      "country": "France"
    },
    {
      "streetAddress": "Friedrichstraße 123",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117",
      "country": "Germany"
    },
    {
      "streetAddress": "Kurfürstendamm 123",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10719",
      "country": "Germany"
    },
    {
      "streetAddress": "Alexanderplatz 123",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10178",
      "country": "Germany"
    },
    {
      "streetAddress": "Brandenburger Tor 123",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117",
      "country": "Germany"
    },
    {
      "streetAddress": "Karl-Liebknecht-Straße 123",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04107",
      "country": "Germany"
    },
    {
      "streetAddress": "Zeil 123",
      "city": "Frankfurt",
      "state": "Hesse",
      "zipCode": "60313",
      "country": "Germany"
    },
    {
      "streetAddress": "Hohenzollernring 123",
      "city": "Cologne",
      "state": "North Rhine-Westphalia",
      "zipCode": "50672",
      "country": "Germany"
    },
    {
      "streetAddress": "Maximilianstraße 123",
      "city": "Munich",
      "state": "Bavaria",
      "zipCode": "80539",
      "country": "Germany"
    },
    {
      "streetAddress": "Heerstraße 123",
      "city": "Hamburg",
      "state": "Hamburg",
      "zipCode": "22767",
      "country": "Germany"
    },
    {
      "streetAddress": "Keizersgracht 123",
      "city": "Amsterdam",
      "state": "North Holland",
      "zipCode": "1015 CJ",
      "country": "Netherlands"
    },
    {
      "streetAddress": "Prinsengracht 123",
      "city": "Amsterdam",
      "state": "North Holland",
      "zipCode": "1016 HV",
      "country": "Netherlands"
    },
    {
      "streetAddress": "Herengracht 123",
      "city": "Amsterdam",
      "state": "North Holland",
      "zipCode": "1016 CC",
      "country": "Netherlands"
    },
    {
      "streetAddress": "Singel 123",
      "city": "Amsterdam",
      "state": "North Holland",
      "zipCode": "1015 AD",
      "country": "Netherlands"
    },
    {
      "streetAddress": "Karl Johans gate 123",
      "city": "Oslo",
      "state": "Oslo",
      "zipCode": "0159",
      "country": "Norway"
    },
    {
      "streetAddress": "Majorstuveien 123",
      "city": "Oslo",
      "state": "Oslo",
      "zipCode": "0367",
      "country": "Norway"
    },
    {
      "streetAddress": "Drammensveien 123",
      "city": "Oslo",
      "state": "Oslo",
      "zipCode": "0271",
      "country": "Norway"
    },
    {
      "streetAddress": "Storgata 123",
      "city": "Oslo",
      "state": "Oslo",
      "zipCode": "0184",
      "country": "Norway"
    },
    {
      "streetAddress": "Hamngatan 123",
      "city": "Stockholm",
      "state": "Stockholm",
      "zipCode": "111 47",
      "country": "Sweden"
    },
    {
      "streetAddress": "Drottninggatan 123",
      "city": "Stockholm",
      "state": "Stockholm",
      "zipCode": "111 51",
      "country": "Sweden"
    },
    {
      "streetAddress": "Kungsgatan 123",
      "city": "Stockholm",
      "state": "Stockholm",
      "zipCode": "111 43",
      "country": "Sweden"
    },
    {
      "streetAddress": "Vasagatan 123",
      "city": "Stockholm",
      "state": "Stockholm",
      "zipCode": "111 20",
      "country": "Sweden"
    },
    {
      "streetAddress": "Torggatan 123",
      "city": "Gothenburg",
      "state": "Västra Götaland County",
      "zipCode": "411 05",
      "country": "Sweden"
    },
    {
      "streetAddress": "Södra Hamngatan 123",
      "city": "Gothenburg",
      "state": "Västra Götaland County",
      "zipCode": "411 06",
      "country": "Sweden"
    },
    {
      "streetAddress": "Avenyn 123",
      "city": "Gothenburg",
      "state": "Västra Götaland County",
      "zipCode": "411 36",
      "country": "Sweden"
    },
    {
      "streetAddress": "Norra Hamngatan 123",
      "city": "Gothenburg",
      "state": "Västra Götaland County",
      "zipCode": "411 06",
      "country": "Sweden"
    },
    {
      "streetAddress": "Esplanadi 123",
      "city": "Helsinki",
      "state": "Uusimaa",
      "zipCode": "00130",
      "country": "Finland"
    },
    {
      "streetAddress": "Mannerheimintie 123",
      "city": "Helsinki",
      "state": "Uusimaa",
      "zipCode": "00100",
      "country": "Finland"
    },
    {
      "streetAddress": "Aleksanterinkatu 123",
      "city": "Helsinki",
      "state": "Uusimaa",
      "zipCode": "00100",
      "country": "Finland"
    },
    {
      "streetAddress": "Kauppatori 123",
      "city": "Helsinki",
      "state": "Uusimaa",
      "zipCode": "00170",
      "country": "Finland"
    },
    {
      "streetAddress": "Váci utca 123",
      "city": "Budapest",
      "state": "Central Hungary",
      "zipCode": "1052",
      "country": "Hungary"
    },
    {
      "streetAddress": "Andrássy út 123",
      "city": "Budapest",
      "state": "Central Hungary",
      "zipCode": "1061",
      "country": "Hungary"
    },
    {
      "streetAddress": "Kossuth Lajos tér 123",
      "city": "Budapest",
      "state": "Central Hungary",
      "zipCode": "1055",
      "country": "Hungary"
    },
    {
      "streetAddress": "Széchenyi István tér 123",
      "city": "Budapest",
      "state": "Central Hungary",
      "zipCode": "1051",
      "country": "Hungary"
    },
    {
      "streetAddress": "Na Příkopě 123",
      "city": "Prague",
      "state": "Prague",
      "zipCode": "110 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Václavské náměstí 123",
      "city": "Prague",
      "state": "Prague",
      "zipCode": "110 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Pařížská 123",
      "city": "Prague",
      "state": "Prague",
      "zipCode": "110 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Jungmannovo náměstí 123",
      "city": "Prague",
      "state": "Prague",
      "zipCode": "110 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Mariánské náměstí 123",
      "city": "Brno",
      "state": "South Moravian Region",
      "zipCode": "602 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Náměstí Svobody 123",
      "city": "Brno",
      "state": "South Moravian Region",
      "zipCode": "602 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Zelný trh 123",
      "city": "Brno",
      "state": "South Moravian Region",
      "zipCode": "602 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Vězeňská 123",
      "city": "Brno",
      "state": "South Moravian Region",
      "zipCode": "602 00",
      "country": "Czech Republic"
    },
    {
      "streetAddress": "Stradun 123",
      "city": "Dubrovnik",
      "state": "Dubrovnik-Neretva County",
      "zipCode": "20000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Gundulićeva poljana 123",
      "city": "Dubrovnik",
      "state": "Dubrovnik-Neretva County",
      "zipCode": "20000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Luža 123",
      "city": "Dubrovnik",
      "state": "Dubrovnik-Neretva County",
      "zipCode": "20000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Od Puča 123",
      "city": "Dubrovnik",
      "state": "Dubrovnik-Neretva County",
      "zipCode": "20000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Riva 123",
      "city": "Split",
      "state": "Split-Dalmatia County",
      "zipCode": "21000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Voćni trg 123",
      "city": "Split",
      "state": "Split-Dalmatia County",
      "zipCode": "21000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Marmontova ulica 123",
      "city": "Split",
      "state": "Split-Dalmatia County",
      "zipCode": "21000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Dioklecijanova ulica 123",
      "city": "Split",
      "state": "Split-Dalmatia County",
      "zipCode": "21000",
      "country": "Croatia"
    },
    {
      "streetAddress": "Piata Unirii 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "030167",
      "country": "Romania"
    },
    {
      "streetAddress": "Calea Victoriei 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "010073",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Lipscani 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "030037",
      "country": "Romania"
    },
    {
      "streetAddress": "Bulevardul Magheru 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "010281",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Franceză 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "030167",
      "country": "Romania"
    },
    {
      "streetAddress": "Bulevardul Unirii 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "030167",
      "country": "Romania"
    },
    {
      "streetAddress": "Piața Revoluției 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "050714",
      "country": "Romania"
    },
    {
      "streetAddress": "Piața Universității 123",
      "city": "Bucharest",
      "state": "Bucharest",
      "zipCode": "050714",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Pictor Arthur Verona 123",
      "city": "Cluj-Napoca",
      "state": "Cluj County",
      "zipCode": "400121",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Horea 123",
      "city": "Cluj-Napoca",
      "state": "Cluj County",
      "zipCode": "400174",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Regele Ferdinand I 123",
      "city": "Cluj-Napoca",
      "state": "Cluj County",
      "zipCode": "400110",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Avram Iancu 123",
      "city": "Cluj-Napoca",
      "state": "Cluj County",
      "zipCode": "400029",
      "country": "Romania"
    },
    {
      "streetAddress": "Piața Unirii 123",
      "city": "Cluj-Napoca",
      "state": "Cluj County",
      "zipCode": "400098",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Mihail Kogălniceanu 123",
      "city": "Iași",
      "state": "Iași County",
      "zipCode": "700028",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Cuza Vodă 123",
      "city": "Iași",
      "state": "Iași County",
      "zipCode": "700056",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Sfântul Lazăr 123",
      "city": "Iași",
      "state": "Iași County",
      "zipCode": "700055",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Lascăr Catargiu 123",
      "city": "Iași",
      "state": "Iași County",
      "zipCode": "700048",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Socola 123",
      "city": "Iași",
      "state": "Iași County",
      "zipCode": "700107",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Palat 123",
      "city": "Timișoara",
      "state": "Timiș County",
      "zipCode": "300085",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Mercy 123",
      "city": "Timișoara",
      "state": "Timiș County",
      "zipCode": "300004",
      "country": "Romania"
    },
    {
      "streetAddress": "Piața Victoriei 123",
      "city": "Timișoara",
      "state": "Timiș County",
      "zipCode": "300006",
      "country": "Romania"
    },
    {
      "streetAddress": "Bulevardul Revoluției 123",
      "city": "Timișoara",
      "state": "Timiș County",
      "zipCode": "300184",
      "country": "Romania"
    },
    {
      "streetAddress": "Strada Vasile Alecsandri 123",
      "city": "Timișoara",
      "state": "Timiș County",
      "zipCode": "300141",
      "country": "Romania"
    }
  ]

/**
 * Generates a random address based on the specified type.
 * @param type - The type of address to generate. Defaults to 'full'.
 * @returns The generated address based on the specified type.
 */
export default function generateAddress(type: 'full' | 'street' | 'city' | 'state' | 'zip' | 'country' | 'json' = 'full') {

  const address = addresses[Math.floor(Math.random() * addresses.length)]

    if (type === 'full') {
        return `${address.streetAddress}, ${address.zipCode} ${address.city}, ${address.state}, ${address.country}`
    } else if (type === 'street') {
        return address.streetAddress
    } else if (type === 'city') {
        return address.city
    } else if (type === 'state') {
        return address.state
    } else if (type === 'zip') {
        return address.zipCode
    } else if (type === 'country') {
        return address.country
    } else if (type === 'json') {
        return address
    }
}