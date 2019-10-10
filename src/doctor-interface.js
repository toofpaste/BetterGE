import {DoctorService} from "./doctor-service";
import './styles.css';
let doc = document.getElementById("loading");
doc.src = 'https://i.pinimg.com/originals/f3/13/31/f31331d3a3c314b5a4ac896e341b913e.gif';
$("#loading").css("display", "none");

let holdItems = [];
let natRune = 0;


let u = 0;
$(document).ready(function(){
  $("#list1").fadeOut(0);
  $("#reset1").click(function (event) {
    $("#loading").fadeIn(1000);
   //$("#loading").css("display", "initial");
    event.preventDefault();
    let bank = parseInt($("#bank").val());
    getPrices(bank);
    $("#reset1").css("display", "none");
  });
 $("#reset").click(function () {
   for(var x = 0; x < holdItems.length; x++) {
     $(`#A${x}`).empty();
   }
   getPrices();
 })

})
function getPrices(bank){
  holdItems = [];
  let docService = new DoctorService();
  docService.getItems()
    .then(function (response2) {
      let body = JSON.parse(response2);
      for (var i = 0; i < 24268; i++) {
        if (body[i] !== undefined) {
          if (bank > 0) {
            if (body[i].buy_average <= bank) {
              holdItems.push(body[i]);
            }
          } else holdItems.push(body[i]);

          if(holdItems[holdItems.length - 1].id === 561){
            natRune = holdItems[holdItems.length - 1].buy_average;
          }
        }

      }
      holdItems = addProfit(holdItems);
      holdItems = getRidOfZeroProfit(holdItems);
      addInfo();

      function addInfo() {
        console.log(u);
        if (u < holdItems.length) {
          docService.moreInfo(holdItems[u].id)
            .then(function (response) {
              let body2 = JSON.parse(response);
              holdItems[u].alch = body2.highalch;
              if(body2.buy_limit !== null) {
                holdItems[u].buylimit = body2.buy_limit;
              }else holdItems[u].buylimit = 1000000;
              u++;
              console.log(u)
              addInfo()
            })
        }else moveOn();
      }

      function moveOn() {
        $("#loading").fadeOut(1000);
        setTimeout(function () {
          $("#list1").fadeIn(1000);
        }, 1000)

        console.log(holdItems)
        holdItems = sortByProfit(holdItems);
        printProfit(holdItems);
        $(`#roi`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortRoi(holdItems);
          printProfit(holdItems)

        })
        $(`#profit`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortByProfit(holdItems);
          printProfit(holdItems)

        })
        $(`#buy`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortBuy(holdItems);
          printProfit(holdItems)

        })
        $(`#sell`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortSell(holdItems);
          printProfit(holdItems)

        })
        $(`#overall`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortOverall(holdItems);
          printProfit(holdItems)

        })
        $(`#buysell`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortBuySell(holdItems);
          printProfit(holdItems)

        })
        $(`#quick`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortQuick(holdItems);
          printProfit(holdItems)

        })
        $(`#hour`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortProfitHour(holdItems);
          printProfit(holdItems)

        })
        $(`#bulk`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortBulk(holdItems);
          printProfit(holdItems)

        })

        $(`#alch`).click(function () {
          for (var x = 0; x < holdItems.length; x++) {
            $(`#A${x}`).empty();
          }
          holdItems = sortAlch(holdItems);
          printProfit(holdItems)

        })
      }

    })

}


function addProfit(tempArray){
  for(var i = 0; i < tempArray.length; i++){
    if(tempArray[i].buy_average > 0){
      tempArray[i].profit = tempArray[i].sell_average - tempArray[i].buy_average;
      tempArray[i].roi = tempArray[i].profit/tempArray[i].buy_average;
      tempArray[i].buysell = tempArray[i].buy_quantity/tempArray[i].sell_quantity;
  }else if(tempArray[i].buy_average === 0){
    tempArray[i].profit = tempArray[i].sell_average - tempArray[i].overall_average;
      tempArray[i].roi = tempArray[i].profit/tempArray[i].overall_average;
      tempArray[i].buysell = tempArray[i].buy_quantity/tempArray[i].sell_quantity;
  }else {
      tempArray[i].profit = 0;
      tempArray[i].roi = 0;
      tempArray[i].buysell = 0;
    }
  }
  return tempArray;
}
function getRidOfZeroProfit(tempArray){
  let holdProfits = []
  for(var i = 0; i < tempArray.length; i++){
    if(tempArray[i].buy_average > 0){
      holdProfits.push(tempArray[i])
    }
  }
  return holdProfits;
}
function sortQuick(tempArray){
  let check = false;
  const hold = [];
  while (!check) {
    check = true;
    for (var i = 0; i < tempArray.length - 1; i++) {
      if (tempArray[i].buysell*tempArray[i].profit > tempArray[i + 1].buysell*tempArray[i+1].profit) {
        hold.push(tempArray[i]);
        hold.push(tempArray[i + 1]);
        tempArray[i] = hold[1];
        tempArray[i + 1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  tempArray.reverse();
  return tempArray;
}

function sortBulk(tempArray){
  let bulkOnly = [];
  let check = false;
  const hold = [];
  for (var i = 0; i < tempArray.length - 1; i++) {
    if (tempArray[i].buy_quantity > 1000) {
      bulkOnly.push(tempArray[i]);
    }
  }
  while (!check) {
    check = true;

    for (var s = 0; s < bulkOnly.length - 1; s++) {
      if (bulkOnly[s].profit > bulkOnly[s+1].profit) {
        hold.push(bulkOnly[s]);
        hold.push(bulkOnly[s + 1]);
        bulkOnly[s] = hold[1];
        bulkOnly[s + 1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  bulkOnly.reverse();
  return bulkOnly;
}

function sortId(tempArray){
  let check = false;
  const hold = [];
  while (!check) {
    check = true;
    for (var i = 0; i < tempArray.length - 1; i++) {
      if (tempArray[i].id > tempArray[i + 1].id) {
        hold.push(tempArray[i]);
        hold.push(tempArray[i + 1]);
        tempArray[i] = hold[1];
        tempArray[i + 1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  return tempArray;
}
function sortAlch(tempArray){
  let check = false;
  const hold = [];
  while (!check) {
    check = true;
    for (var i = 0; i < tempArray.length - 1; i++) {
      if ((tempArray[i].alch + natRune) - tempArray[i].buy_average >(tempArray[i + 1].alch + natRune) - tempArray[i+1].buy_average) {
        hold.push(tempArray[i]);
        hold.push(tempArray[i + 1]);
        tempArray[i] = hold[1];
        tempArray[i + 1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  tempArray.reverse();
  return tempArray;
}
function sortProfitHour(tempArray){
  let check = false;
  const hold = [];
  while (!check) {
    check = true;
    for (var i = 0; i < tempArray.length - 1; i++) {
      if(tempArray[i].sell_quantity <= tempArray[i].buylimit && tempArray[i+1].sell_quantity <= tempArray[i+1].buylimit) {
        if (tempArray[i].sell_quantity * tempArray[i].profit > tempArray[i + 1].sell_quantity * tempArray[i + 1].profit) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }else if(tempArray[i].sell_quantity <= tempArray[i].buylimit && tempArray[i+1].sell_quantity >= tempArray[i+1].buylimit) {
        if (tempArray[i].sell_quantity * tempArray[i].profit > tempArray[i + 1].buylimit * tempArray[i + 1].profit) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }else if(tempArray[i].sell_quantity >= tempArray[i].buylimit && tempArray[i+1].sell_quantity >= tempArray[i+1].buylimit){
        if (tempArray[i].buylimit * tempArray[i].profit > tempArray[i + 1].buylimit * tempArray[i + 1].profit) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }else if(tempArray[i].sell_quantity >= tempArray[i].buylimit && tempArray[i+1].sell_quantity <= tempArray[i+1].buylimit){
        if (tempArray[i].buylimit * tempArray[i].profit > tempArray[i + 1].sell_quantity * tempArray[i + 1].profit) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
  }
  tempArray.reverse();
  return tempArray;
}
function sortBuySell(tempArray) {
  let check = false;
  const hold = [];
  while (!check) {
    check = true;
    for (var i = 0; i < tempArray.length - 1; i++) {
      if (tempArray[i].buysell > tempArray[i + 1].buysell) {
        hold.push(tempArray[i]);
        hold.push(tempArray[i + 1]);
        tempArray[i] = hold[1];
        tempArray[i + 1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  tempArray.reverse();
  return tempArray;
}
  function sortByProfit(tempArray) {
    let check = false;
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < tempArray.length - 1; i++) {
        if (tempArray[i].profit > tempArray[i + 1].profit) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
    tempArray.reverse();
    return tempArray;
  }
  function sortRoi(tempArray) {
    let check = false;
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < tempArray.length - 1; i++) {
        if (tempArray[i].roi > tempArray[i + 1].roi) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
    tempArray.reverse();
    return tempArray;

  }
function sortOverall(tempArray){
  let check = false;
  const hold = [];
  while (!check) {
    check = true;
    for (var i = 0; i < tempArray.length - 1; i++) {
      if (tempArray[i].overall_quantity > tempArray[i + 1].overall_quantity) {
        hold.push(tempArray[i]);
        hold.push(tempArray[i + 1]);
        tempArray[i] = hold[1];
        tempArray[i + 1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  tempArray.reverse();
  return tempArray;


}
  function sortBuy(tempArray){
    let check = false;
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < tempArray.length - 1; i++) {
        if (tempArray[i].buy_quantity > tempArray[i + 1].buy_quantity) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
    tempArray.reverse();
    return tempArray;


  }
  function sortSell(tempArray) {
    let check = false;
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < tempArray.length - 1; i++) {
        if (tempArray[i].sell_quantity > tempArray[i + 1].sell_quantity) {
          hold.push(tempArray[i]);
          hold.push(tempArray[i + 1]);
          tempArray[i] = hold[1];
          tempArray[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
    tempArray.reverse();
    return tempArray;


  }

  function printProfit(tempArray){
  $("#natRune").text("Nature rune price: " + natRune);
  let textcolor = ["red", "blue", "black"];
  let ind = 2;
  let ind2 = 2;
  let ind3 = 2;
  for(var p = 0; p < tempArray.length; p++){
    if(tempArray[p].roi > 0.5){
      ind = 1;
    }else if(tempArray[p].roi < 0.01){
      ind = 0;
    }else ind = 2;
    if((tempArray[p].alch + 	natRune) - tempArray[p].buy_average > 100){
      ind2 = 1;
    }else if((tempArray[p].alch + 	natRune) - tempArray[p].buy_average > 0){
      ind2 = 2;
    }else ind2 = 0;
    if(tempArray[p].buysell > 1){
      ind3 = 1;
    }else if(tempArray[p].buysell > 0.3){
      ind3 = 2
    }else ind3 = 0;
    var top = `<tr id="A${p}"></tr>`;
    $("#qbTable tbody").append(top);
    $(`#A${p}`).append(`<td>${tempArray[p].name}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].overall_average.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].buy_average.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].sell_average.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].profit.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td style="color: ${textcolor[ind]}">${tempArray[p].roi}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].buy_quantity.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].sell_quantity.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].overall_quantity.toLocaleString()}</td>`);
    $(`#A${p}`).append(`<td style="color: ${textcolor[ind3]}">${tempArray[p].buysell}</td>`);
    $(`#A${p}`).append(`<td style="color: ${textcolor[ind2]}">${(tempArray[p].alch) - (tempArray[p].buy_average + natRune)}</td>`);
    $(`#A${p}`).append(`<td style="color: ${textcolor[ind2]}">${(tempArray[p].alch)}</td>`);
    $(`#A${p}`).append(`<td>${tempArray[p].buylimit.toLocaleString()}</td>`);


  }
  }
