import {WeatherService} from "./weather-service";
import './styles.css';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
        let city = $('#location').val();
        $('#location').val("");
        let search = $("#redSub").val();
        $('#redSub').val("");
        let weatherService = new WeatherService();


        weatherService.weatherCall(city)
            .then(function(response) {
                let body = JSON.parse(response);

                let descr = body.weather[0].main;
                $(".showSky").text(`Current Weather: ${descr}`);
                $(".showHumidity").text(`Current Humidity in ${city} is ${body.main.humidity}%`);
                $(".showTemp").text(`Current Temperature in Fahrenheit in ${city} is ${((body.main.temp -273.15)*(9/5) + 32)}`);
                return weatherService.hourCall(city);
            })
            .then(function(response) {
                let body1 = JSON.parse(response);
                let nameHold = [];
                let timeHold = [];
                let tempHold = [];
                let tempMin = [];
                let tempMax = [];
                let humHold = [];
                let humidity = body1.list[0].main.humidity;
                let c = 0;
                for(let i = 0; i < body1.list.length; i++){
                    let min = ((body1.list[i].main.temp_min-273.15)*(9/5) + 32);
                    let max = ((body1.list[i].main.temp_max-273.15)*(9/5) + 32);
                    let tem = ((body1.list[i].main.temp-273.15)*(9/5) + 32);
                    nameHold.push(body1.list[i].weather[0].description);
                    timeHold.push(body1.list[i].dt_txt);
                    tempHold.push(tem);
                    tempMin.push(min);
                    tempMax.push(max);
                    humHold.push(body1.list[i].main.humidity);
                    if(i % 6 === 0 && i >= 6){
                        c++;
                    }
                    $("#hourly").append("<div id=" + c + "hour" + i + "></div>");
                }
                let p = 0;
                for(let x = 0; x < nameHold.length; x++){
                    let high = parseInt(tempMax[x]);
                    let low = parseInt(tempMin[x]);
                    let tem = parseInt(tempHold[x]);
                    if(x % 6 === 0 && x >= 6){
                            p++;
                    }
                    console.log(p);
                    $("#" + p + "hour"+x).html(`<p>Time: ${timeHold[x]} <br> Description: ${nameHold[x]} <br> High/Low: ${high} : ${low} <br> Expected Temp: ${tem} <br> Humidity: ${humHold[x]}%</p>`);
                }
                return weatherService.giphyCall(humidity, city);
            })
            .then(function(response) {
                let giphyResponse = JSON.parse(response);
                let image = giphyResponse["data"][0]["images"]["downsized"]["url"];
                $('.showImage').html(`<img src='${image}'>`);
                return weatherService.redditNews();
            })
            // .then(function(response){
            //
            //     let newsInfo = JSON.parse(response);
            //     let titles = [];
            //     let link = [];
            //     let descr = [];
            //     let img2 = [];
            //     let e = 0;
            //     for(let w = 0; w < newsInfo.articles.length; w++){
            //         titles.push(newsInfo.articles[w].title);
            //         descr.push(newsInfo.articles[w].description);
            //         link.push(newsInfo.articles[w].url);
            //         img2.push(newsInfo.articles[w].urlToImage);
            //         if(w % 6 === 0 && w >= 6){
            //             e++;
            //         }
            //         console.log(e);
            //         $("#news").append("<div id=" + e + "story" + w + "></div>");
            //     }
            //     let r = 0;
            //     for(let t = 0; t < titles.length; t++){
            //         if(t % 6 === 0 && t >= 6){
            //             r++;
            //         }
            //         $("#"+r+"story"+t).html(`<img src ='${img2[t]}'> <br><h3>${titles[t]}</h3><br><p>${descr[t]}</p><br><a href='${link[t]}'>Read More</a>'`);
            //     }
            //     return weatherService.redditNews();
            // })
            .then(function(response){
                let redditNew = JSON.parse(response);
                let titles = [];
                let link = [];
                let cy = 0;
                for(let co = 0; co < redditNew.data.children.length; co++){
                    titles.push(redditNew.data.children[co].data.title);
                    link.push(redditNew.data.children[co].data.url);
                    if(co % 5 === 0 && co >= 5){
                        cy++;
                    }
                    $("#redNews").append("<div id=" + cy + "redN" + co + "></div>");
                }
                let yc = 0;
                for(let oc = 0; oc < titles.length; oc++){
                    if(oc % 5 === 0 && oc >= 5){
                        yc++;
                    }
                    $("#" + yc + "redN" + oc).html(`<h3><a href='${link[oc]}'>${titles[oc]}</a></h3>`)
                }
                return weatherService.redditPics();
            })
            .then(function(response){
                let redditNew = JSON.parse(response);
                let titles = [];
                let link = [];
                let pic = [];
                let cy = 0;
                for(let co = 0; co < redditNew.data.children.length; co++){
                    titles.push(redditNew.data.children[co].data.title);
                    link.push("https://old.reddit.com" + redditNew.data.children[co].data.permalink);
                    pic.push(redditNew.data.children[co].data.url)
                    if(co % 5 === 0 && co >= 5){
                        cy++;
                    }
                    $("#redPics").append("<div id=" + cy + "redP" + co + "></div>");
                }
                let yc = 0;
                for(let oc = 0; oc < titles.length; oc++){
                    if(oc % 5 === 0 && oc >= 5){
                        yc++;
                    }
                    $("#" + yc + "redP" + oc).html(`<h3><a href='${link[oc]}'>${titles[oc]}</a></h3><br><a href='${pic[oc]}'><img src='${pic[oc]}'></a>`);
                }
                    return weatherService.searchSub(search);

            })
            .then(function(response){
                let redditNew = JSON.parse(response);
                let titles = [];
                let sub =[];
                let link = [];
                let cy = 0;
                for(let co = 0; co < redditNew.data.children.length; co++){
                    titles.push(redditNew.data.children[co].data.title);
                    link.push("https://old.reddit.com" + redditNew.data.children[co].data.url);
                    sub.push(redditNew.data.children[co].data.display_name_prefixed);

                    if(co % 5 === 0 && co >= 5){
                        cy++;
                    }
                    $("#subRed").append("<div id=" + cy + "subN" + co + "></div>");
                }
                let yc = 0;
                for(let oc = 0; oc < titles.length; oc++){
                    if(oc % 5 === 0 && oc >= 5){
                        yc++;
                    }
                    $("#" + yc + "subN" + oc).html(`<h1><a href='${link[oc]}'>${sub[oc]}</a></h1><h3><a href='${link[oc]}'>${titles[oc]}</a></h3>`)
                }
                return weatherService.picSearch(search);
            })
            .then(function(response){
                let redditNew = JSON.parse(response);
                let link = [];
                let cy = 0;
                for(let co = 0; co < redditNew.hits.length; co++){
                    link.push(redditNew.hits[co].webformatURL);
                    if(co % 5 === 0 && co >= 5){
                        cy++;
                    }
                    $("#picNew").append("<div id=" + cy + "picN" + co + "></div>");
                }
                let yc = 0;
                for(let oc = 0; oc < link.length; oc++) {
                    if (oc % 5 === 0 && oc >= 5) {
                        yc++;
                    }
                    $("#" + yc + "picN" + oc).html(`<img src='${link[oc]}'>`);
                }
            })
    });
});
