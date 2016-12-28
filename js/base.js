
/**
 * @fileoverview
 * Provides methods for the Hello Endpoints sample UI and interaction with the
 * Hello Endpoints API.
 *
 * @author danielholevoet@google.com (Dan Holevoet)
 */

/** google global namespace for Google projects. */
var google = google || {};

/** devrel namespace for Google Developer Relations projects. */
google.devrel = google.devrel || {};

/** samples namespace for DevRel sample code. */
google.devrel.samples = google.devrel.samples || {};

/** hello namespace for this sample. */
google.devrel.samples.hello = google.devrel.samples.hello || {};

/**
 * Client ID of the application (from the APIs Console).
 * @type {string}
 */
google.devrel.samples.hello.CLIENT_ID =
    '914459490981-06hjhp3aq5pfgguoiee3oor739u7m15i.apps.googleusercontent.com';

google.devrel.samples.hello.placeApporder = function(
    amount, fullname, address, zipcodecity, email) {

    return jQuery.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'type': 'POST',
        'url': "api/placeApporder",
        'data': JSON.stringify({
            'amount': amount,
            'name': fullname,
            'address': address,
            'zipcodecity': zipcodecity,
            'email': email
        }),
        'dataType': 'json',
        'success': function(resp) {
            if (resp) {
                if (resp.success) {
                    window.open("/ordersuccess.html","_self");
                } else {
                    window.open("/orderfailed.html","_self");
                }
            }
        }
    });

};

/**
 * Enables the button callbacks in the UI.
 */
google.devrel.samples.hello.enableButtons = function() {

  document.getElementById('placeApporder').onclick = function() {
      var orderForm = document.getElementById("orderform");
      if (!orderForm.checkValidity || orderForm.checkValidity()) {
          document.getElementById('placeApporder').innerHTML = 'Beställer... <i class="fa fa-spinner fa-spin"></i>';
          google.devrel.samples.hello.placeApporder(
              document.getElementById('amount').value,
              document.getElementById('fullname').value,
              document.getElementById('address').value,
              document.getElementById('zipcodecity').value,
              document.getElementById('email').value);
      }
  };

};


