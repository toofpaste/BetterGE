let apiKey = "87ba8f96382f5e689a7ae52826597cea";
let geoKey = "ypc9xVgSwr5BYgsuAKhfheVA4wqBgSrI";
export class DoctorService {
    getList(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    }
    getGeo(city){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `http://open.mapquestapi.com/geocoding/v1/address?key=${geoKey}&location=${city}`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    }
    docCall(search, name, lon, lat) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${search}&location=${lat}%2C${lon}%2C100&skip=0&limit=10&user_key=${apiKey}`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    }
    redditMed(search){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://www.reddit.com/r/AskDocs/search.json?q=${search}&restrict_sr=on`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    }
}
