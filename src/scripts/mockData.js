let locations = [
    {
        "id": "123",
        "lat": "37.78378250000001",
        "lon": "122.39587179999998"
    },
    {
        "id": "456",
        "lat": "37.783771",
        "lon": "123.39587179999998"
    },
];

let get = () => {
    return locations;
};

export default {
    get: get,
    locations: locations
};