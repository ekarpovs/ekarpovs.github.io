  
  // Hahdler for form button:
  // <button class="button" onclick="onClick()">Send</button>

  function onClick(e) {
    grecaptcha.ready(function() {
      grecaptcha.execute('6LdIuRYaAAAAAKQjexmUEMZFy9p6l3oHXOvB16a1', {action: 'submit'})
      .then(function(token) {
        // Add your logic to submit to your backend server here.
        form = document.getElementById("invisible-recaptcha-form");
        form.submit();
      })
    });
  }
