let weatherKey = "e5b2f22a390cc27d39eda60d69995f4a";
let giphyKey = "gVOhymhq6TMU5y1PuOsjW5xYzyoOk5Qr";
let newsKey = "64d113d64b384f279f4ac290c6a58bfe";
let picKey = "12697260-e3b2a2dff9c3e0b00c8ec6343";
export class WeatherService {
    weatherCall(city) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;

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
    hourCall(city){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherKey}`;

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

    giphyCall(humidity, city) {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `http://api.giphy.com/v1/gifs/search?q=${city}&api_key=${giphyKey}&limit=5`

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
    // newsToday(){
    //     return new Promise(function(resolve, reject) {
    //         let request = new XMLHttpRequest();
    //         let url = `https://newsapi.org/v2/everything?q=bitcoin&from=2019-05-05&sortBy=publishedAt&apiKey=64d113d64b384f279f4ac290c6a58bfe`
    //
    //         request.onload = function() {
    //             if (this.status === 200) {
    //                 resolve(request.response);
    //             } else {
    //                 reject(Error(request.statusText));
    //             }
    //         }
    //
    //         request.open("GET", url, true);
    //         request.send();
    //     });
    // }
    redditNews(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://www.reddit.com/r/news/new.json?limit=25`

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
    redditPics(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://www.reddit.com/r/pics/new.json?limit=25`

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
    searchSub(search){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://www.reddit.com/subreddits/search.json?q=${search}&include_over_18=on`

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
    picSearch(search){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://pixabay.com/api/?key=${picKey}&q=${search}&safesearch=false&image_type=photo`

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
