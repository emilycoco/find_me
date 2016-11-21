function createHash(lat) {
    lat = lat.toString();
    for (var i = 0; i < lat.length; i++) {
        var chr = lat[i].charCodeAt(0);
        var hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

export const addLocation = (location) => {
    return {
        type: 'ADD_LOCATION',
        id: createHash(location.lat),
        location: location
    }
};
