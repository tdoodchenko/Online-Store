// Create and initialize a payment form object
var paymentForm = new SqPaymentForm({

    applicationId: "6NSPWY9FA9",
    locationId: "REPLACE_WITH_LOCATION_ID",
  

  
    // Initialize Web Apple Pay placeholder ID
    applePay: {
      elementId: 'sq-apple-pay'
    },
 
  });
  

  function methodsSupported (methods, unsupportedReason) {
    console.log(methods);

    var applePayBtn = document.getElementById('sq-apple-pay');

    // Only show the button if Apple Pay on the Web is enabled
    // Otherwise, display the wallet not enabled message.
    if (methods.applePay === true) {
      applePayBtn.style.display = 'inline-block';
    } else {
      console.log(unsupportedReason);
    }
  };

  var paymentForm = new SqPaymentForm({

    
  
    // SqPaymentForm callback functions
    callbacks: {
  
      
  
      /*
       * callback function: createPayment Request
       * Triggered when: a digital wallet payment button is clicked.
       * returns a PaymentRequestObject from your custom helper function
       */
     createPaymentRequest: function () {
  
       //a PaymentRequestObject is returned from this
       //helper
       return myCreatePaymentRequestHelperFunction();
    }
  });
