//let weatherKey = "e5b2f22a390cc27d39eda60d69995f4a";
let docKey = "87ba8f96382f5e689a7ae52826597cea";
export class DoctorService {
    getList(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${docKey}`;

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
    docCall(search, name) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${search}&location=45.5155%2C-122.6793%2C100&skip=0&limit=10&user_key=${docKey}`;

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
