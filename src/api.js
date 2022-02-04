
const API_BASE_URI = "http://localhost:3000";

export default class api {
    static getData() {
        const uri = API_BASE_URI + "/cakesDetails";
        console.log("URI.......",uri);
        return fetch(uri, {
            method: 'GET'
        });
    }
}