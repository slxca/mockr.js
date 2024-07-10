



/**
 * Generates a random geolocation.
 * @param type - The type of geolocation to generate. Defaults to 'coordinates'.
 * @returns The generated geolocation.
 */
export default function generateGeolocation(type: 'latitude' | 'longitude' | 'coordinates' = 'coordinates') {
    const latitude = Math.random() * 180 - 90;
    const longitude = Math.random() * 360 - 180;

    if (type === 'latitude') {
        return latitude;
    } else if (type === 'longitude') {
        return longitude;
    } else {
        return {
            latitude,
            longitude
        };
    }
}