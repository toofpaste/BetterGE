import {DoctorService} from "./doctor-service";
import './styles.css';

$(document).ready(function() {
    let docService = new DoctorService();

    docService.getList()
      .then(function(response) {
          let body = JSON.parse(response);
          for(let d = 0; d < body.data.length; d++){
          $("#search").append(`<option value='${body.data[d].name}'>${body.data[d].name}</option>`);
          }
      })
    $('#doctorSearch').click(function() {
        $(".errors").empty();
        $("#title").empty();
        $("#docs").empty();
        let search = $('#search').val();
        $('#search').val("");
        let name = $('#name').val();
        $('#name').val("");

       docService.docCall(search, name)
            .then(function(response) {
                let body = JSON.parse(response);
                let nameHold = [];
                let cityHold = [];
                let stateHold = [];
                let streetHold = [];
                let zipHold = [];
                let phoneHold = [];
                if(body.meta.total > 0) {
                    $("#title").html(`<h2>Doctors found that can help with: ${search}</h2>`);
                    for (var i = 0; i < body.data[0].practices.length; i++) {
                        nameHold.push(body.data[0].practices[i].name);
                        cityHold.push(body.data[0].practices[i].visit_address.city);
                        stateHold.push(body.data[0].practices[i].visit_address.state);
                        streetHold.push(body.data[0].practices[i].visit_address.street);
                        zipHold.push(body.data[0].practices[i].visit_address.zip);
                        phoneHold.push(body.data[0].practices[i].phones[0].number);
                        $("#docs").append(`<div id='doc${i}'></div>`);
                    }
                    for (var x = 0; x < nameHold.length; x++) {
                        $(`#doc${x}`).html(`Name: ${nameHold[x]}<br>Address: ${streetHold[x]}, ${cityHold[x]}, ${stateHold[x]}, ${zipHold[x]} <br> Phone Number: ${phoneHold[x]}`);
                    }
                }else $(".errors").html(`<h2>No doctors found with the name ${name} and the symptom of ${search}</h2>`);
               // return weatherService.hourCall(city);
            })
    });
});
