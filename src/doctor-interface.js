import {DoctorService} from "./doctor-service";
import './styles.css';

$(document).ready(function() {
  let docService = new DoctorService();

  docService.getList()
    .then(function(response) {
      let body = JSON.parse(response);
      let listHold = [];
      for(let d = 0; d < body.data.length; d++){
        listHold.push(body.data[d].name);
      }
      listHold.sort();
      for(let j = 0; j < listHold.length; j++){
        $("#search").append(`<option value='${listHold[j]}'>${listHold[j]}</option>`);
      }
    });
  $('#doctorSearch').click(function() {
    $(".errors").empty();
    $("#title").empty();
    $("#docs").empty();
    $("#reddit").empty();
    let city = $("#city").val();
    $("#city").val("");
    let search = $('#search').val();
    $('#search').val("");
    let name = $('#name').val();
    $('#name').val("");
    docService.getGeo(city)
      .then(function(response){
        let body = JSON.parse(response);
        let lon1 = body.results[0].locations[0].latLng.lng;
        let lat1 = body.results[0].locations[0].latLng.lat;
        let lon = lon1.toString();
        let lat = lat1.toString();
        return docService.docCall(search, name, lon, lat);

      })

      .then(function(response) {
        let body = JSON.parse(response);
        let nameHold = [];
        let cityHold = [];
        let stateHold = [];
        let streetHold = [];
        let zipHold = [];
        let phoneHold = [];
        let acceptNew = [];
        if(body.meta.total > 0) {
          $("#title").html(`<h2>Doctors found that can help with: ${search}</h2>`);
          for (var i = 0; i < body.data.length; i++) {
            nameHold.push(body.data[i].practices[0].name);
            cityHold.push(body.data[i].practices[0].visit_address.city);
            stateHold.push(body.data[i].practices[0].visit_address.state);
            streetHold.push(body.data[i].practices[0].visit_address.street);
            zipHold.push(body.data[i].practices[0].visit_address.zip);
            phoneHold.push(body.data[i].practices[0].phones.number);
            acceptNew.push(body.data[i].practices[0].accepts_new_patients);
            $("#docs").append(`<div id='doc${i}'></div>`);
          }
          for (var x = 0; x < nameHold.length; x++) {
            $(`#doc${x}`).html(`Name: ${nameHold[x]}<br>Address: ${streetHold[x]}, ${cityHold[x]}, ${stateHold[x]}, ${zipHold[x]} <br> Phone Number: ${phoneHold[x]} <br> Accepting new: ${acceptNew[x]}`);
          }
        }else $(".errors").html(`<h2>No doctors found with the name ${name} and the symptom of ${search}</h2>`);
        return docService.redditMed(search);
      })
      .then(function(response) {
        let body = JSON.parse(response);
        let title = [];
        let link = [];
        $("#redTop").html(`<h1>Here are the top results from a reddit.com/r/AskDocs search for: ${search}</h1>`)
        for(let u = 0; u < body.data.children.length; u++){
          title.push(body.data.children[u].data.title);
          link.push(body.data.children[u].data.url);
          $("#redTop").append(`<div id='#redMed${u}'><a href="${link[u]}">${title[u]}</a></div>`);
        }

      });
  });
});
