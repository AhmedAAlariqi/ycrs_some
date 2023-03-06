$(".input-tel").intlTelInput({
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
  
});
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "us";
      callback(countryCode);
    });
  },
  utilsScript: "../../build/js/utils.js?1638200991544" // just for formatting/placeholders etc
});

$(function(){
  $('#datepicker').datepicker();
});

const myModal = document.getElementById('ThankYouForApply')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})