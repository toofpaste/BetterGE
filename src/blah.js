// import {DoctorService} from "./doctor-service";
//let holdOD = new Odell1();
// let odell = holdOD.justShowMeThis();
// let year = 2014;
// let week = 1;
// let game = [];
// let c = 0;
// export class Odell1 {
//   justShowMeThis() {
//     let objr = [{
//         "playerName": "Odell Beckham",
//       "playerID": "00-0031235",
//       "attempts": 0, "completions":
//           0, "totalYard":
//           0, "PassTouchDowns":
//           0, "rushingYards":
//           0, "rushingAtt":
//           0, "rushingTD":
//           0, "rushingLongTD10":
//           0, "rushingLongTD20":
//           0, "rushingLongTD30":
//           0, "rushingLongTD40":
//           0, "rushingLongTD50":
//           0, "rushingLongTD60":
//           0, "rushingLongTD70":
//           0, "rushingLongTD80":
//           0, "rushingLongTD90":
//           0, "receptions":
//           0, "receivingTD":
//           0, "receivingYards":
//           0, "receivingLongTD10":
//           0, "receivingLongTD20":
//           0, "receivingLongTD30":
//           0, "receivingLongTD40":
//           0, "receivingLongTD50":
//           0, "receivingLongTD60":
//           0, "receivingLongTD70":
//           0, "receivingLongTD80":
//           0, "receivingLongTD90":
//           0, "kickRetTD":
//           0, "ExtraPoints":
//           0, "FieldGoalsMade":
//           0, "FieldGoalAtt":
//           0, "FieldGoalYards":
//           0, "gamesPlayed":
//           0, "fPassPoints":
//           0, "fRushPoints":
//           0, "fReceivingPoints":
//           0, "fKickPoints":
//           0, "position":
//           "WR", "status":
//           "true", "experience":
//           8, "byeWeek":
//           9, "avgDraftPos":
//           18.7, "depthOrder":
//           1, "upcomingOppRank":
//           8, "drafted":
//           2014, "sportsDataID":
//           16389, "projGames":
//           16, "projAvgDraft":
//           18.7, "projExtraPoints":
//           0,
//         "projFP":
//           0, "projDraftKingsFP":
//           384.3, "projFanDuelFP":
//           320.4, "projFDFP":
//           384.3, "projYahooFP":
//           320.4, "projPPRFP":
//           382.8, "projTD":
//           12.8, "projGamesStarted":
//           16, "projReceptions":
//           124.9, "projRecepPercent":
//           85.0, "projReceivingTD":
//           12.8, "projRecepTargs":
//           208.5, "projRushingATT":
//           10.1, "projRushingYards":
//           31.2, "projRushingYardsPerCarry":
//           8.9, "projReceivingYards":
//           1810.6, "projReceivingYardsPerRecep":
//           20.6, "projRushingTDs":
//           0, "projPassingYards":
//           0, "projPassingTDs":
//           0, "projPassingATT":
//           0, "projPassingYardsPerATT":
//           0, "projFGMade":
//           0
//       }];
//     return objr;
//   }
//
// }
//
//
// function start() {
//   console.log("year: " + year + " week: " + week);
//   if(year < 2019) {
//     docService.getList(year, week)
//       .then(function (response) {
//         var parser, xmlDoc;
//         parser = new DOMParser();
//         xmlDoc = parser.parseFromString(response, "text/xml");
//         let hold = xmlDoc.getElementsByTagName("gms");
//
//
//         for (var i = 0; i < hold[0].childNodes.length; i++) {
//           game.push(hold[0].childNodes[i].attributes[0
//             ].nodeValue)
//         }
//         c = 0;
//         getGames();
//
//       });
//
//   } else {
//     test(odell);
//     console.log(odell);
//   }
// }
//
// function getGames() {
//   let docService = new DoctorService();
//   if (c < game.length) {
//     let gameCheck = [];
//     docService.specificGame(game[c])
//       .then(function (response2) {
//         let body = JSON.parse(response2);
//         checkWRAway();
//         function checkWRAway(){
//           if (body[game[c]].away.stats.receiving[odell[0].playerID]) {
//             let longTD = body[game[c]].away.stats.receiving[odell[0].playerID].lngtd;
//             odell[0].receivingTD += body[game[c]].away.stats.receiving[odell[0].playerID].tds;
//             odell[0].receptions += body[game[c]].away.stats.receiving[odell[0].playerID].rec;
//             odell[0].receivingYards += body[game[c]].away.stats.receiving[odell[0].playerID].yds;
//             if(longTD > 0 && longTD <= 10){
//               odell[0].receivingLongTD10 += 1;
//             }else if(longTD > 10 && longTD <= 20){
//               odell[0].receivingLongTD20 += 1;
//             }else if(longTD > 20 && longTD <= 30){
//               odell[0].receivingLongTD30 += 1;
//             }else if(longTD > 30 && longTD <= 40){
//               odell[0].receivingLongTD40 += 1;
//             }else if(longTD > 40 && longTD <= 50){
//               odell[0].receivingLongTD50 += 1;
//             }else if(longTD > 50 && longTD <= 60){
//               odell[0].receivingLongTD60 += 1;
//             }else if(longTD > 60 && longTD <= 70){
//               odell[0].receivingLongTD70 += 1;
//             }else if(longTD > 70 && longTD <= 80){
//               odell[0].receivingLongTD80 += 1;
//             }else if(longTD > 80 && longTD <= 90){
//               odell[0].receivingLongTD90 += 1;
//             }
//             gameCheck.push(odell[0].playerID);
//           }
//         }
//         checkWRHome()
//         function checkWRHome() {
//           if (body[game[c]].home.stats.receiving[odell[0].playerID]) {
//             let longTD = body[game[c]].home.stats.receiving[odell[0].playerID].lngtd;
//             odell[0].receivingTD += body[game[c]].home.stats.receiving[odell[0].playerID].tds;
//             odell[0].receptions += body[game[c]].home.stats.receiving[odell[0].playerID].rec;
//             odell[0].receivingYards += body[game[c]].home.stats.receiving[odell[0].playerID].yds;
//             if (longTD > 0 && longTD <= 10) {
//               odell[0].receivingLongTD10 += 1;
//             } else if (longTD > 10 && longTD <= 20) {
//               odell[0].receivingLongTD20 += 1;
//             } else if (longTD > 20 && longTD <= 30) {
//               odell[0].receivingLongTD30 += 1;
//             } else if (longTD > 30 && longTD <= 40) {
//               odell[0].receivingLongTD40 += 1;
//             } else if (longTD > 40 && longTD <= 50) {
//               odell[0].receivingLongTD50 += 1;
//             } else if (longTD > 50 && longTD <= 60) {
//               odell[0].receivingLongTD60 += 1;
//             } else if (longTD > 60 && longTD <= 70) {
//               odell[0].receivingLongTD70 += 1;
//             } else if (longTD > 70 && longTD <= 80) {
//               odell[0].receivingLongTD80 += 1;
//             } else if (longTD > 80 && longTD <= 90) {
//               odell[0].receivingLongTD90 += 1;
//             }
//             gameCheck.push(odell[0].playerID);
//           }
//         }
//         checkRushAway();
//         function checkRushAway(){
//           if (body[game[c]].away.stats.rushing[odell[0].playerID]) {
//             let longTD = body[game[c]].away.stats.rushing[odell[0].playerID].lngtd;
//             odell[0].rushingTD += body[game[c]].away.stats.rushing[odell[0].playerID].tds;
//             odell[0].rushingAtt += body[game[c]].away.stats.rushing[odell[0].playerID].att;
//             odell[0].rushingYards += body[game[c]].away.stats.rushing[odell[0].playerID].yds;
//             if (longTD > 0 && longTD <= 10) {
//               odell[0].rushingLongTD10 += 1;
//             } else if (longTD > 10 && longTD <= 20) {
//               odell[0].rushingLongTD20 += 1;
//             } else if (longTD > 20 && longTD <= 30) {
//               odell[0].rushingLongTD30 += 1;
//             } else if (longTD > 30 && longTD <= 40) {
//               odell[0].rushingLongTD40 += 1;
//             } else if (longTD > 40 && longTD <= 50) {
//               odell[0].rushingLongTD50 += 1;
//             } else if (longTD > 50 && longTD <= 60) {
//               odell[0].rushingLongTD60 += 1;
//             } else if (longTD > 60 && longTD <= 70) {
//               odell[0].rushingLongTD70 += 1;
//             } else if (longTD > 70 && longTD <= 80) {
//               odell[0].rushingLongTD80 += 1;
//             } else if (longTD > 80 && longTD <= 90) {
//               odell[0].rushingLongTD90 += 1;
//             }
//             gameCheck.push(odell[0].playerID);
//
//
//           }
//
//         }
//         checkRushHome();
//         function checkRushHome(){
//           if (body[game[c]].home.stats.rushing[odell[0].playerID]) {
//             let longTD = body[game[c]].home.stats.rushing[odell[0].playerID].lngtd;
//             odell[0].rushingTD += body[game[c]].home.stats.rushing[odell[0].playerID].tds;
//             odell[0].rushingAtt += body[game[c]].home.stats.rushing[odell[0].playerID].att;
//             odell[0].rushingYards += body[game[c]].home.stats.rushing[odell[0].playerID].yds;
//             if (longTD > 0 && longTD <= 10) {
//               odell[0].rushingLongTD10 += 1;
//             } else if (longTD > 10 && longTD <= 20) {
//               odell[0].rushingLongTD20 += 1;
//             } else if (longTD > 20 && longTD <= 30) {
//               odell[0].rushingLongTD30 += 1;
//             } else if (longTD > 30 && longTD <= 40) {
//               odell[0].rushingLongTD40 += 1;
//             } else if (longTD > 40 && longTD <= 50) {
//               odell[0].rushingLongTD50 += 1;
//             } else if (longTD > 50 && longTD <= 60) {
//               odell[0].rushingLongTD60 += 1;
//             } else if (longTD > 60 && longTD <= 70) {
//               odell[0].rushingLongTD70 += 1;
//             } else if (longTD > 70 && longTD <= 80) {
//               odell[0].rushingLongTD80 += 1;
//             } else if (longTD > 80 && longTD <= 90) {
//               odell[0].rushingLongTD90 += 1;
//             }
//             gameCheck.push(odell[0].playerID);
//           }
//         }
//         gameCounter();
//         function gameCounter(){
//           for(var f = 0; f < gameCheck.length; f++){
//             for(var p = 0; p < gameCheck.length; p++){
//               if(gameCheck[f] === gameCheck[p] && f !== p && gameCheck[f] !== 0 && gameCheck[p] !== 0){
//                 gameCheck[p] = 0;
//               }
//             }
//           }
//           for(var y = 0; y < gameCheck.length; y++){
//             if(gameCheck[y] !== 0){
//               odell[0].gamesPlayed += 1;
//             }
//           }
//         }
//         c++;
//         if(c < game.length){
//           getGames();
//         }else if(year < 2019){
//           if(week < 17){
//             week++;
//           }else {
//             week = 1;
//             year++;
//           }
//           game = [];
//           start();
//         }
//       })
//
//   }else {
//     test(odell);
//     console.log(odell);
//   }
// }
//

