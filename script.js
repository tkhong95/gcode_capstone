// javascript for form.html

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {

    // Reference to the form element
    var form = document.getElementById('contact');
  
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get form input values
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var message = document.getElementById('message').value;
  
      // Simple validation 
      if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Regular expression for basic email validation
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Regular expression for phone number validation (optional)
      var phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (phone !== '' && !phoneRegex.test(phone)) {
        alert('Please enter a valid phone number (format: 123-456-7890).');
        return;
      }
  
      // If all validation passes, you can proceed with form submission
      // For simplicity, let's just log the form data to console
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Message:', message);
  
      // Optionally, you can submit the form programmatically
      form.submit(); // Uncomment this line to submit the form
    });
  
  });
  

// script.js for hidden option
function toggleHiddenContent() {
    // Get the selected option value
    const selectedValue = document.getElementById('selectOption').value;

    // Hide all content sections
    document.querySelectorAll('.hidden-content').forEach(content => {
        content.style.display = 'none';
    });

    // Show the selected content section
    if (selectedValue === 'money') {
        document.getElementById('moneyContent').style.display = 'block';
    } else if (selectedValue === 'cloth') {
        document.getElementById('clothContent').style.display = 'block';
    }
}

// javascript for credit card
document.addEventListener('DOMContentLoaded', function() {
    var creditCardForm = document.getElementById('creditCardForm');
    
    creditCardForm.addEventListener('submit', function(event) {
      event.preventDefault();
      clearErrors(); // Clear previous error messages
      
      var cardNumber = document.getElementById('cardNumber').value.trim();
      var cardName = document.getElementById('cardName').value.trim();
      var expiryDate = document.getElementById('expiryDate').value.trim();
      var cvv = document.getElementById('cvv').value.trim();
      var amountValue = document.getElementById('amount').value.trim();
      
      if (!isValidCardNumber(cardNumber)) {
        displayError('cardNumberError', 'Please enter a valid card number.');
        return;
      }
      
      if (cardName === '') {
        displayError('cardNameError', 'Please enter cardholder\'s name.');
        return;
      }
      
      if (!isValidExpiryDate(expiryDate)) {
        displayError('expiryDateError', 'Please enter a valid expiry date (MM/YY).');
        return;
      }
      
      if (!isValidCVV(cvv)) {
        displayError('cvvError', 'Please enter a valid CVV.');
        return;
      }
      
      if (!isValidAmount(amountValue)) {
        displayError('amountError', 'Please enter a valid amount.');
        return;
      }

      // If all validations pass, you can proceed with form submission or other actions
      alert('Form submitted successfully!');
      // You can uncomment the following line to submit the form programmatically
      // form.submit();
    });
    
    function clearErrors() {
      var errorElements = document.querySelectorAll('.error-message');
      errorElements.forEach(function(element) {
        element.textContent = '';
      });
    }
    
    function displayError(id, errorMessage) {
      var errorElement = document.getElementById(id);
      if (errorElement) {
        errorElement.textContent = errorMessage;
      }
    }
    
    function isValidCardNumber(cardNumber) {
      // Basic check for a valid card number (16 digits)
      var cardNumberRegex = /^\d{16}$/;
      return cardNumberRegex.test(cardNumber);
    }
    
    function isValidExpiryDate(expiryDate) {
      // Basic check for a valid expiry date in MM/YY format
      var expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      return expiryDateRegex.test(expiryDate);
    }
    
    function isValidCVV(cvv) {
      // Basic check for a valid CVV (3 digits)
      var cvvRegex = /^\d{3}$/;
      return cvvRegex.test(cvv);
    }

    function isValidAmount(amount) {
        return amount !== '';
    }
  });

// clothing form
function validateForm() {
var firstName = document.getElementById('firstName').value.trim();
var lastName = document.getElementById('lastName').value.trim();
var email = document.getElementById('email').value.trim();

var isValid = true;

// Validation for first name
if (firstName === '') {
    isValid = false;
    displayError('firstNameError', 'Please enter your first name.');
} else {
    displayError('firstNameError', '');
}

// Validation for last name
if (lastName === '') {
    isValid = false;
    displayError('lastNameError', 'Please enter your last name.');
} else {
    displayError('lastNameError', '');
}

// Validation for email
if (email === '') {
    isValid = false;
    displayError('emailError', 'Please enter your email address.');
} else {
    displayError('emailError', '');
}

// Additional validation for email format using regex
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    isValid = false;
    displayError('emailError', 'Please enter a valid email address.');
}

return isValid;
}

function displayError(id, errorMessage) {
var errorElement = document.getElementById(id);
if (errorElement) {
    errorElement.textContent = errorMessage;
}
}

// about.html 
function toggleDarkLight() {
    var body = document.getElementById("changethis");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

document.addEventListener('DOMContentLoaded', function() {
  // Check if the body has a class indicating the current theme
  const isDarkTheme = document.body.classList.contains('dark-theme');

  // Function to toggle the theme
  function toggleTheme() {
    if (isDarkTheme) {
      // Switch to light theme
      document.body.classList.remove('dark-theme');
    } else {
      // Switch to dark theme
      document.body.classList.add('dark-theme');
    }
    isDarkTheme =!isDarkTheme; // Update the theme state
  }

  // Attach the toggleTheme function to the button's click event
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});



  







