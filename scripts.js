AOS.init({ offset: 0 });

function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.toggle("open"); // Toggle visibility using a class
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.remove("open"); // Ensure menu closes
}


let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Add any specific JavaScript adjustments for resizing here
        console.log('Resize adjustments complete');
    }, 250);
});

// This function will ensure the navbar is always visible after exiting fullscreen or resizing
function ensureNavbarVisible() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.style.display = 'flex';  // Restore the navbar if it's hidden
    }
}

document.querySelector('.hamburg').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
});

document.querySelector('.dropdown').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('open');
    }
});
// Open Hamburger Menu
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburg");
    const dropdownMenu = document.querySelector(".dropdown");
    const closeButton = document.querySelector(".cancel");
    const links = document.querySelectorAll(".dropdown .links a");
  
    // Open the dropdown menu when hamburger is clicked
    hamburgerIcon.addEventListener("click", () => {
      dropdownMenu.classList.add("open");
    });
  
    // Close the dropdown menu when the "X" button is clicked
    closeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdownMenu.classList.remove("open");
    });
  
    // Close the dropdown menu and navigate to the section when a link is clicked
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdownMenu.classList.remove("open");
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Prevent clicks inside the dropdown from closing it unintentionally
    dropdownMenu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
  


//sizing
window.addEventListener('resize', () => {
    document.body.style.width = window.innerWidth + 'px';
});
// Close Hamburger Menu
function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.classList.remove("active");
}

// Reset Navigation on Resize
window.addEventListener("resize", () => {
    const navbar = document.querySelector(".dropdown");
    const links = document.querySelector(".links");

    if (window.innerWidth > 768) {
        // Show normal navigation and hide dropdown
        links.style.display = "flex";
        navbar.classList.remove("active");
    } else {
        // Hide normal navigation and rely on dropdown
        links.style.display = "none";
    }
});
function redirectToAbout() {
    window.location.href = "#about"; // Adjust the ID or URL to your About section
}
// Listen for fullscreen change
document.addEventListener('fullscreenchange', function() {
    ensureNavbarVisible();  // Ensure navbar is visible when exiting fullscreen
});

// Handle window resizing (for normal resizing)
window.addEventListener('resize', function() {
    ensureNavbarVisible();  // Ensure navbar is visible when resizing the window
});

// Optionally, if you use a button to toggle fullscreen, ensure navbar is shown
const fullscreenButton = document.getElementById('fullscreen-btn');
fullscreenButton.addEventListener('click', function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
function redirectTo(page) {
    window.location.href = page;
}
// Function to open the project popup
// Function to open the project popup
function openPopup(projectId) {
    const titles = ['Project 1', 'Project 2', 'Project 3', 'Project 4'];
    const descriptions = [
        'This is the description for Project 1.',
        'This is the description for Project 2.',
        'This is the description for Project 3.',
        'This is the description for Project 4.'
    ];
    const images = [
        'project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg'
    ];
    const tags = [
        ['HTML', 'CSS'], 
        ['JavaScript', 'CSS'], 
        ['Python', 'Tkinter'], 
        ['Java', 'HTML']
    ];

    // Set the popup content based on the projectId
    document.getElementById('popup-title').innerText = titles[projectId - 1];
    document.getElementById('popup-image').src = images[projectId - 1];
    document.getElementById('popup-description').innerText = descriptions[projectId - 1];
    
    const tagsContainer = document.getElementById('popup-tags');
    tagsContainer.innerHTML = ''; // Clear previous tags
    tags[projectId - 1].forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('popup-tag');
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // Show the popup
    document.getElementById('project-popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    // Hide the popup
    document.getElementById('project-popup').style.display = 'none';
}

// Ensure the popup is hidden by default when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('project-popup').style.display = 'none'; // Force hide popup on load
});

// Ensure the popup does not open automatically, only when a project is clicked
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        const projectId = project.dataset.projectId; // Get project ID
        openPopup(projectId); // Open the popup with the selected project ID
    });
});



// Close the popup when the close button is clicked
document.getElementById('popup-close').addEventListener('click', closePopup);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80, // Adjust offset for header
            behavior: 'smooth'
        });
    });
});


// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .dropdown a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump to the section
        const targetId = this.getAttribute('href').substring(1); // Extract the target ID
        const targetElement = document.getElementById(targetId); // Find the target section

        // Check if the target section exists
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Add smooth scrolling effect
                block: 'start' // Align the section to the top of the viewport
            });

            // Update the URL hash to reflect the current section
            window.history.pushState(null, '', `#${targetId}`);
        } else if (targetId === "home") {
            // Special case for the Home section (scroll to the top)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Update the URL hash for Home
            window.history.pushState(null, '', `#${targetId}`);
        }

        // Close dropdown menu if it is open
        cancel();
    });
});


// Initialize EmailJS (this should be at the start of the script)
(function() {
    emailjs.init("Arkin"); // Initialize EmailJS with your user ID
})();

// Toggle the dropdown menu when the hamburger icon is clicked
document.querySelector('.hamburg').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_44pmlnn", "template_jdz3gkb", templateParams)
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message: " + error.text);
        });
});
// Initialize AOS (Animate On Scroll)


// Handle popup for project cards
function openPopup(projectId) {
    const projectData = [
        {
            title: "Calculator",
            image: "Calculator.jpeg",
            description: "A responsive calculator built using HTML and CSS.",
            tags: ["HTML","  ,  " ,"CSS"]
        },
        {
            title: "Bio-data",
            image: "Bio-data.jpeg",
            description: "bio-data website created with HTML and CSS.",
            tags: ["HTML","  ,  " ,"CSS"]
        },
        {
            title: "Contact Form",
            image: "Contact.png",
            description: "A functional contact application using Python and Tkinter.",
            tags: ["Python","  ,  " ,"Tkinter"]
        },
        {
            title: "Portfolio",
            image: "port.png",
            description: "A personal portfolio website built with HTML, CSS, and JavaScript.",
            tags: ["JavaScript","  ,  ","HTML","  ,  ","CSS"]
        }
    ];

    const project = projectData[projectId - 1];

    // Populate popup content
    document.getElementById('popup-title').innerText = project.title;
    document.getElementById('popup-image').src = project.image;
    document.getElementById('popup-description').innerText = project.description;

    const tagsContainer = document.getElementById('popup-tags');
    tagsContainer.innerHTML = ''; // Clear existing tags
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'popup-tag';
        span.innerText = tag;
        tagsContainer.appendChild(span);
    });

    // Display popup
    document.getElementById('project-popup').style.display = 'flex';
}

function closePopup() {
    // Hide the popup
    document.getElementById('project-popup').style.display = 'none';
}

// Initialize popup functionality for project cards
document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectId = parseInt(this.getAttribute('data-project-id'));
            openPopup(projectId);
        });
    });

    // Close popup on clicking the close button
    document.getElementById('popup-close').addEventListener('click', closePopup);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .dropdown a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
