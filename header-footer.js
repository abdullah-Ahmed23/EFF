const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial dark mode state based on local storage
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');

    // Update local storage with dark mode preference
    localStorage.setItem('darkMode', darkModeToggle.checked);
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile');

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('visible');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dropButton = document.querySelector('.drop');
    const dropMenu = document.querySelector('.dropMEnu');

    dropButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents the event from bubbling up to the document
        dropMenu.classList.toggle('clicked');
    });

    // Close the drop menu when clicking anywhere outside of it
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropMEnu') && !event.target.closest('.drop')) {
            dropMenu.classList.remove('clicked');
        }
    });
});
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');

    if (window.scrollY > 50) { // Adjust the scroll value as needed
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});


const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    hamburger.classList.toggle('hamburger--hover');
});

document.addEventListener('DOMContentLoaded', function() {
    // Define a flag to track if the animation has been triggered
    let animationTriggered = false;

    window.addEventListener('scroll', function() {
        // Check if the animation has already been triggered
        if (!animationTriggered) {
            var section = document.querySelector('.dseign');
            var imgDiv = section.querySelector('.img');

            var sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= window.innerHeight) {
                // Trigger the animation by adding the 'scrolled' class
                imgDiv.classList.add('scrolled');
                // Set the flag to true to indicate that animation has been triggered
                animationTriggered = true;
            }
        }
    });
});


// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to animate the counter from 0 to +99 with a delay when in viewport
function animateCounterOnScroll(counter, target, delay) {
    let animationTriggered = false; // Flag to track if animation has been triggered

    function handleScroll() {
        if (!animationTriggered && isInViewport(counter)) {
            setTimeout(function() {
                let count = 0;
                const duration = 2000; // Animation duration in milliseconds
                const step = Math.ceil(target / (duration / 10)); // Calculate step based on duration

                // Define the animation interval
                const interval = setInterval(function() {
                    count += step;
                    if (count >= target) {
                        count = target;
                        clearInterval(interval); // Clear the interval when target is reached
                    }
                    counter.textContent = '+' + count; // Update the counter element
                }, 10); // Update every 10 milliseconds

                animationTriggered = true; // Set flag to indicate animation has been triggered

                // Remove the scroll event listener to prevent animation from triggering again
                window.removeEventListener('scroll', handleScroll);
            }, delay); // Start the animation after the delay
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}

// Get the counter elements
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');
const counter3 = document.getElementById('counter3');

// Call the function for each counter to start the animation with a delay when in viewport
animateCounterOnScroll(counter1, 500, 1000); // Delay of 1000 milliseconds (1 second)
animateCounterOnScroll(counter2, 85, 2000); // Delay of 2000 milliseconds (2 seconds)
animateCounterOnScroll(counter3, 250, 2500); // Delay of 3000 milliseconds (3 seconds)




function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var message = document.getElementById("message").value;

    if (firstName == "" || lastName == "" || email == "" || phoneNumber == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    // You can add more specific validation here, e.g., for email format

    return true; // Form will submit if validation passes
}
window.onload = function() {
    // Check if the URL has a hash
    if(window.location.hash) {
        // Scroll to the element with the specified ID
        var element = document.querySelector(window.location.hash);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};
function sendWhatsApp(){

    var phoneNumber = "+201154948851"
    var name = document.querySelector('.name').value;
    var Lname = document.querySelector('.lname').value;
    var email = document.querySelector('.emailW').value;
    var phone = document.querySelector('.phone').value;
    var message = document.querySelector('.msg').value;
    var state = document.querySelector('.state').value;
    var service = document.querySelector('.service').value;
    // //////////////////////////////////////////////////
    if (name == "" || Lname == "" || email == "" || phone == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    else{
        var url = "https://wa.me/" + phoneNumber + "?text=" 
        + "Name :" +name+"%0a"
        + "" +Lname+"%0a"
        + "Email :" +email+"%0a"
        + "phone :" +phone+"%0a"
        + "message :" +message+"%0a"
        + "state :" +state+"%0a"
        + "service :" +service+"%0a"
        window.open(url,"_blank").focus();
    }

   
}
