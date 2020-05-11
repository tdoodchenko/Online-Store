Stripe.setPublishableKey('pk_test_TYooMQauvdEDq54NiTphI7jx');

Stripe.applePay.checkAvailability(function(available) {
  if (available) {
    document.getElementById('apple-pay-button').style.display = 'block';
  }
});

document.getElementById('apple-pay-button').addEventListener('click', beginApplePay);

function beginApplePay() {
    var paymentRequest = {
      countryCode: 'US',
      currencyCode: 'USD',
      total: {
        label: 'Stripe.com',
        amount: '19.99'
      }
    };
    var session =  Stripe.applePay.buildSession(paymentRequest,
        function(result, completion) {
    
        $.post('/charges', { token: result.token.id }).done(function() {
          completion(ApplePaySession.STATUS_SUCCESS);
          // You can now redirect the user to a receipt page, etc.
          window.location.href = '/success.html';
        }).fail(function() {
          completion(ApplePaySession.STATUS_FAILURE);
        });
    
      }, function(error) {
        console.log(error.message);
      });
    
      session.oncancel = function() {
        console.log("User hit the cancel button in the payment window");
      };
    
      session.begin(); // continued below
  }