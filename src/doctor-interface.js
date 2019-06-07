import {DoctorService} from "./doctor-service";
import './styles.css';

$(document).ready(function() {
    $('#doctorSearch').click(function() {
        let search = $('#search').val();
        $('#search').val("");
        let name = $('#name').val();
        $('#name').val("");
        let docService = new DoctorService();


        docService.docCall(search, name)
            .then(function(response) {
                let body = JSON.parse(response);
                let nameHold = [];
                let cityHold = [];
                let stateHold = [];
                let streetHold = [];
                let zipHold = [];
                let phoneHold = [];
                for(var i = 0; i < body.data[0].practices.length; i++){
                    nameHold.push(body.data[0].practices[i].name);
                    cityHold.push(body.data[0].practices[i].visit_address.city);
                    stateHold.push(body.data[0].practices[i].visit_address.state);
                    streetHold.push(body.data[0].practices[i].visit_address.street);
                    zipHold.push(body.data[0].practices[i].visit_address.zip);
                    phoneHold.push(body.data[0].practices[i].phones[0].number);
                    $("#docs").append(`<div id='doc${i}'></div>`);
                }
                for(var x = 0; x < nameHold.length; x++){
                    $(`#doc${x}`).html(`Name: ${nameHold[x]}<br>Address: ${streetHold[x]}, ${cityHold[x]}, ${stateHold[x]}, ${zipHold[x]} <br> Phone Number: ${phoneHold[x]}`);
                }
               // return weatherService.hourCall(city);
            })
    });
});
