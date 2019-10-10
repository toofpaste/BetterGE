// $("#title").append(`{"playerName": "${allInfo[o].playerName}", "playerID": "${allInfo[o].playerID}", "attempts": ${allInfo[o].attempts}, "completions": ${allInfo[o].completions}, "totalYard": ${allInfo[o].totalYard}, "PassTouchDowns": ${allInfo[o].PassTouchDowns}, "rushingYards": ${allInfo[o].rushingYards}, "rushingAtt": ${allInfo[o].rushingAtt}, "rushingTD": ${allInfo[o].rushingTD}, "rushingLongTD10": ${allInfo[o].rushingLongTD10}, "rushingLongTD20": ${allInfo[o].rushingLongTD20}, "rushingLongTD30": ${allInfo[o].rushingLongTD30}, "rushingLongTD40": ${allInfo[o].rushingLongTD40},"rushingLongTD50": ${allInfo[o].rushingLongTD50},"rushingLongTD60": ${allInfo[o].rushingLongTD60},"rushingLongTD70": ${allInfo[o].rushingLongTD70},"rushingLongTD80": ${allInfo[o].rushingLongTD80},"rushingLongTD90": ${allInfo[o].rushingLongTD90}, "receptions": ${allInfo[o].receptions}, "receivingTD": ${0}, "receivingYards": ${allInfo[o].receivingYards}, "receivingLongTD10": ${allInfo[o].receivingLongTD10}, "receivingLongTD20": ${allInfo[o].receivingLongTD20}, "receivingLongTD30": ${allInfo[o].receivingLongTD30},"receivingLongTD40": ${allInfo[o].receivingLongTD40}, "receivingLongTD50": ${allInfo[o].receivingLongTD50}, "receivingLongTD60": ${allInfo[o].receivingLongTD60}, "receivingLongTD70": ${allInfo[o].receivingLongTD70}, "receivingLongTD80": ${allInfo[o].receivingLongTD80}, "receivingLongTD90": ${allInfo[o].receivingLongTD90}, "kickRetTD": ${allInfo[o].kickRetTD}, "ExtraPoints": ${allInfo[o].ExtraPoints}, "FieldGoalsMade": ${allInfo[o].FieldGoalsMade}, "FieldGoalAtt": ${allInfo[o].FieldGoalAtt}, "FieldGoalYards": ${allInfo[o].FieldGoalYards}, "gamesPlayed": ${allInfo[o].gamesPlayed} }, `);


// function sortPassTD(){
//   let count = 0;
//   let check = false;
//   const hold = [];
//   while(!check){
//     check = true;
//     for (var i = 0; i < playedGames.length -1; i++){
//       if(playedGames[i].PassTouchDowns > playedGames[i+1].PassTouchDowns){
//         hold.push(playedGames[i]);
//         hold.push(playedGames[i + 1]);
//         playedGames[i] = hold[1];
//         playedGames[i+1] = hold[0];
//         hold.pop();
//         hold.pop();
//         check = false;
//         count++;
//       }
//     }
//   }
//   playedGames.reverse();
//   console.log(playedGames);
// }


//
// //start();
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
//   }
//   else { print() }
// }
// let c = 0;
// function getGames() {
//   let ran = false;
//
//   if (c < game.length) {
//     let gameCheck = [];
//     docService.specificGame(game[c])
//       .then(function (response2) {
//         let body = JSON.parse(response2);
//         checkQBAway();
//         function checkQBAway() {
//
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].away.stats.passing[allInfo[p].playerID]) {
//               let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//               allInfo[ind].attempts += parseInt(body[game[c]].away.stats.passing[allInfo[p].playerID].att);
//               allInfo[ind].completions += parseInt(body[game[c]].away.stats.passing[allInfo[p].playerID].cmp);
//               allInfo[ind].PassTouchDowns += parseInt(body[game[c]].away.stats.passing[allInfo[p].playerID].tds);
//               allInfo[ind].totalYard += parseInt(body[game[c]].away.stats.passing[allInfo[p].playerID].yds);
//               gameCheck.push(allInfo[p].playerID);
//             }
//           }
//         }
//         checkQBHome();
//         function checkQBHome(){
//           for (var p = 0; p < tempName.length; p++) {
//             if(body[game[c]].home.stats.passing[allInfo[p].playerID]){
//               let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//               allInfo[ind].attempts += parseInt(body[game[c]].home.stats.passing[allInfo[p].playerID].att);
//               allInfo[ind].completions += parseInt(body[game[c]].home.stats.passing[allInfo[p].playerID].cmp);
//               allInfo[ind].PassTouchDowns += parseInt(body[game[c]].home.stats.passing[allInfo[p].playerID].tds);
//               allInfo[ind].totalYard += parseInt(body[game[c]].home.stats.passing[allInfo[p].playerID].yds);
//               gameCheck.push(allInfo[p].playerID);
//
//             }
//           }
//         }
//         checkWRAway();
//         function checkWRAway(){
//           for(var p = 0; p < tempName.length; p++){
//             if (body[game[c]].away.stats.receiving[allInfo[p].playerID]) {
//               let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//               let longTD = body[game[c]].away.stats.receiving[allInfo[p].playerID].lngtd;
//               allInfo[ind].receivingTD += body[game[c]].away.stats.receiving[allInfo[p].playerID].tds;
//               allInfo[ind].receptions += body[game[c]].away.stats.receiving[allInfo[p].playerID].rec;
//               allInfo[ind].receivingYards += body[game[c]].away.stats.receiving[allInfo[p].playerID].yds;
//               if(longTD > 0 && longTD <= 10){
//                 allInfo[ind].receivingLongTD10 += 1;
//               }else if(longTD > 10 && longTD <= 20){
//                 allInfo[ind].receivingLongTD20 += 1;
//               }else if(longTD > 20 && longTD <= 30){
//                 allInfo[ind].receivingLongTD30 += 1;
//               }else if(longTD > 30 && longTD <= 40){
//                 allInfo[ind].receivingLongTD40 += 1;
//               }else if(longTD > 40 && longTD <= 50){
//                 allInfo[ind].receivingLongTD50 += 1;
//               }else if(longTD > 50 && longTD <= 60){
//                 allInfo[ind].receivingLongTD60 += 1;
//               }else if(longTD > 60 && longTD <= 70){
//                 allInfo[ind].receivingLongTD70 += 1;
//               }else if(longTD > 70 && longTD <= 80){
//                 allInfo[ind].receivingLongTD80 += 1;
//               }else if(longTD > 80 && longTD <= 90){
//                 allInfo[ind].receivingLongTD90 += 1;
//               }
//               gameCheck.push(allInfo[p].playerID);
//             }
//           }
//         }
//         checkWRHome()
//         function checkWRHome() {
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].home.stats.receiving[allInfo[p].playerID]) {
//               let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//               let longTD = body[game[c]].home.stats.receiving[allInfo[p].playerID].lngtd;
//               allInfo[ind].receivingTD += body[game[c]].home.stats.receiving[allInfo[p].playerID].tds;
//               allInfo[ind].receptions += body[game[c]].home.stats.receiving[allInfo[p].playerID].rec;
//               allInfo[ind].receivingYards += body[game[c]].home.stats.receiving[allInfo[p].playerID].yds;
//               if (longTD > 0 && longTD <= 10) {
//                 allInfo[ind].receivingLongTD10 += 1;
//               } else if (longTD > 10 && longTD <= 20) {
//                 allInfo[ind].receivingLongTD20 += 1;
//               } else if (longTD > 20 && longTD <= 30) {
//                 allInfo[ind].receivingLongTD30 += 1;
//               } else if (longTD > 30 && longTD <= 40) {
//                 allInfo[ind].receivingLongTD40 += 1;
//               } else if (longTD > 40 && longTD <= 50) {
//                 allInfo[ind].receivingLongTD50 += 1;
//               } else if (longTD > 50 && longTD <= 60) {
//                 allInfo[ind].receivingLongTD60 += 1;
//               } else if (longTD > 60 && longTD <= 70) {
//                 allInfo[ind].receivingLongTD70 += 1;
//               } else if (longTD > 70 && longTD <= 80) {
//                 allInfo[ind].receivingLongTD80 += 1;
//               } else if (longTD > 80 && longTD <= 90) {
//                 allInfo[ind].receivingLongTD90 += 1;
//               }
//               gameCheck.push(allInfo[p].playerID);
//             }
//           }
//         }
//         checkRushAway();
//         function checkRushAway(){
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].away.stats.rushing[allInfo[p].playerID]) {
//               let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//               let longTD = body[game[c]].away.stats.rushing[allInfo[p].playerID].lngtd;
//               allInfo[ind].rushingTD += body[game[c]].away.stats.rushing[allInfo[p].playerID].tds;
//               allInfo[ind].rushingAtt += body[game[c]].away.stats.rushing[allInfo[p].playerID].att;
//               allInfo[ind].rushingYards += body[game[c]].away.stats.rushing[allInfo[p].playerID].yds;
//               if (longTD > 0 && longTD <= 10) {
//                 allInfo[ind].rushingLongTD10 += 1;
//               } else if (longTD > 10 && longTD <= 20) {
//                 allInfo[ind].rushingLongTD20 += 1;
//               } else if (longTD > 20 && longTD <= 30) {
//                 allInfo[ind].rushingLongTD30 += 1;
//               } else if (longTD > 30 && longTD <= 40) {
//                 allInfo[ind].rushingLongTD40 += 1;
//               } else if (longTD > 40 && longTD <= 50) {
//                 allInfo[ind].rushingLongTD50 += 1;
//               } else if (longTD > 50 && longTD <= 60) {
//                 allInfo[ind].rushingLongTD60 += 1;
//               } else if (longTD > 60 && longTD <= 70) {
//                 allInfo[ind].rushingLongTD70 += 1;
//               } else if (longTD > 70 && longTD <= 80) {
//                 allInfo[ind].rushingLongTD80 += 1;
//               } else if (longTD > 80 && longTD <= 90) {
//                 allInfo[ind].rushingLongTD90 += 1;
//               }
//               gameCheck.push(allInfo[p].playerID);
//
//
//             }
//           }
//
//         }
//         checkRushHome();
//         function checkRushHome(){
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].home.stats.rushing[allInfo[p].playerID]) {
//               let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//               let longTD = body[game[c]].home.stats.rushing[allInfo[p].playerID].lngtd;
//               allInfo[ind].rushingTD += body[game[c]].home.stats.rushing[allInfo[p].playerID].tds;
//               allInfo[ind].rushingAtt += body[game[c]].home.stats.rushing[allInfo[p].playerID].att;
//               allInfo[ind].rushingYards += body[game[c]].home.stats.rushing[allInfo[p].playerID].yds;
//               if (longTD > 0 && longTD <= 10) {
//                 allInfo[ind].rushingLongTD10 += 1;
//               } else if (longTD > 10 && longTD <= 20) {
//                 allInfo[ind].rushingLongTD20 += 1;
//               } else if (longTD > 20 && longTD <= 30) {
//                 allInfo[ind].rushingLongTD30 += 1;
//               } else if (longTD > 30 && longTD <= 40) {
//                 allInfo[ind].rushingLongTD40 += 1;
//               } else if (longTD > 40 && longTD <= 50) {
//                 allInfo[ind].rushingLongTD50 += 1;
//               } else if (longTD > 50 && longTD <= 60) {
//                 allInfo[ind].rushingLongTD60 += 1;
//               } else if (longTD > 60 && longTD <= 70) {
//                 allInfo[ind].rushingLongTD70 += 1;
//               } else if (longTD > 70 && longTD <= 80) {
//                 allInfo[ind].rushingLongTD80 += 1;
//               } else if (longTD > 80 && longTD <= 90) {
//                 allInfo[ind].rushingLongTD90 += 1;
//               }
//               gameCheck.push(allInfo[p].playerID);
//             }
//           }
//         }
//         checkKickAway();
//         function checkKickAway(){
//
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].away.stats.kicking) {
//               if (body[game[c]].away.stats.kicking[allInfo[p].playerID]) {
//                 let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//                 allInfo[ind].ExtraPoints += body[game[c]].away.stats.kicking[allInfo[p].playerID].xptot;
//                 allInfo[ind].FieldGoalAtt += body[game[c]].away.stats.kicking[allInfo[p].playerID].fga;
//                 allInfo[ind].FieldGoalsMade += body[game[c]].away.stats.kicking[allInfo[p].playerID].fgm;
//                 allInfo[ind].FieldGoalYards += body[game[c]].away.stats.kicking[allInfo[p].playerID].fgyds;
//                 gameCheck.push(allInfo[p].playerID);
//               }
//             }
//
//
//           }
//
//         }
//         checkKickHome();
//         function checkKickHome(){
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].home.stats.kicking) {
//               if (body[game[c]].home.stats.kicking[allInfo[p].playerID]) {
//                 let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//                 allInfo[ind].ExtraPoints += body[game[c]].home.stats.kicking[allInfo[p].playerID].xptot;
//                 allInfo[ind].FieldGoalAtt += body[game[c]].home.stats.kicking[allInfo[p].playerID].fga;
//                 allInfo[ind].FieldGoalsMade += body[game[c]].home.stats.kicking[allInfo[p].playerID].fgm;
//                 allInfo[ind].FieldGoalYards += body[game[c]].home.stats.kicking[allInfo[p].playerID].fgyds;
//                 gameCheck.push(allInfo[p].playerID);
//               }
//             }
//
//           }
//
//         }
//         checkSTAway();
//         function checkSTAway(){
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].away.stats.kickret) {
//               if (body[game[c]].away.stats.kickret[allInfo[p].playerID]) {
//                 let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//                 allInfo[ind].kickRetTD += body[game[c]].away.stats.kickret[allInfo[p].playerID].tds;
//                 gameCheck.push(allInfo[p].playerID);
//               }
//             }
//           }
//         }
//         checkSTHome();
//         function checkSTHome(){
//           for (var p = 0; p < tempName.length; p++) {
//             if (body[game[c]].home.stats.kickret) {
//               if (body[game[c]].home.stats.kickret[allInfo[p].playerID]) {
//                 let ind = allInfo.findIndex(x => x.playerID === allInfo[p].playerID);
//                 allInfo[ind].kickRetTD += body[game[c]].home.stats.kickret[allInfo[p].playerID].tds;
//                 gameCheck.push(allInfo[p].playerID);
//               }
//             }
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
//               let ind = allInfo.findIndex(x => x.playerID === gameCheck[y]);
//               allInfo[ind].gamesPlayed += 1;
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
//   }else print();
// }
// function print() {
//   //console.log(allInfo);
//   test();
// }



//print copy/pasteable list
// docService.test()
//   .then(function (response2) {
//     let body = JSON.parse(response2);
//     Object.keys(body).forEach(function(x){
//      // console.log(x)
//       let objHold = {}
//       objHold.playerName = body[x].full_name;
//       objHold.playerID = x;
//       allInfo.push(objHold)
//     })
//
//   });
// setTimeout(function(){
//   console.log("start")
//   for(var o = 0; o < allInfo.length; o++){
//     $("#title").append(`{"playerName": "${allInfo[o].playerName}", "playerID": "${allInfo[o].playerID}"},`);
//   }
// }, 6000)

//Object.keys(allInfo).forEach(function(d){
//console.log(d.playerID)
//})
