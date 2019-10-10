//let apiKey = "87ba8f96382f5e689a7ae52826597cea";
//let geoKey = "ypc9xVgSwr5BYgsuAKhfheVA4wqBgSrI";
//1st month :
export class DoctorService {

    getItems(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `https://rsbuddy.com/exchange/summary.json`;

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
    moreInfo(item){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `https://www.osrsbox.com/osrsbox-db/items-json/${item}.json`;

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
