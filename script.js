



/**
 * ----------------- footer------------
 */

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
const yearElement = document.getElementById('year');
yearElement.textContent = currentYear;


window.addEventListener('load', function() {
  const container = document.querySelector('.container');
  container.addEventListener('scroll', function() {
    container.classList.toggle('snapping', container.scrollLeft % 220 !== 0);
  });
});




       /*--------------form----------------*/

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var email = document.getElementById("email-input").value;
  if (validateEmail(email)) {
    // Show the modal
    modal.style.display = "block";
    document.getElementById("email-input").value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

// Get the modal element
var modal = document.getElementById("success-modal");

// Get the close button for the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function validateEmail(email) {
  // Simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**------------------------- ------------------------ */


const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  this.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', setActiveLink);
});




// Variables
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

let currentSlide = 0;

// Functions
function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  updateSlider();
  updateIndicators();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentSlide) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Automatic slide change
setInterval(nextSlide, 3000);






/*------------harmbuger--------- */

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');
const sidebarLinks = document.querySelectorAll('.sidebar-menu li a');

mobileMenuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  sidebar.classList.toggle('show');
});

closeIcon.addEventListener('click', () => {
  menu.classList.remove('show');
  sidebar.classList.remove('show');
});

sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebarLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});



/*--------------active----------- */

const menuLinks = document.querySelectorAll('.menu li a');

menuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    menuLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});





/*---------------drop------------- */

function toggleDropdown(event) {
  event.preventDefault();
  var dropdown = event.target.parentNode;
  dropdown.classList.toggle("open");
  var caret = event.target.querySelector(".fa-caret-down");
  caret.classList.toggle("rotate");
}



$(document).ready(function() {
  $('.category-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick"
      }
    ]
  });
});





const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
tooltipTriggers.forEach(trigger => {
  trigger.addEventListener('mouseover', () => {
    trigger.classList.add('active');
  });
  trigger.addEventListener('mouseout', () => {
    trigger.classList.remove('active');
  });
});



function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.style.display = 'block';

  setTimeout(function() {
    popup.style.display = 'none';
  }, 2000);
}


function showSharePopup() {
  var popup = document.getElementById("sharePopup");
  popup.style.display = "block";
}

function hideSharePopup() {
  var popup = document.getElementById("sharePopup");
  popup.style.display = "none";
}
function shareOnSocialMedia(platform) {
  if (platform === "facebook") {
    // Replace "YOUR_URL" with the URL you want to share
    var url = encodeURIComponent("YOUR_URL");
    window.open("https://www.facebook.com/sharer.php?u=" + url, "_blank");
  } 
  else if (platform === "twitter") {
    // Replace "YOUR_URL" with the URL you want to share
    var url = encodeURIComponent("YOUR_URL");
    var text = encodeURIComponent("Check out this link");
    window.open("https://twitter.com/intent/tweet?url=" + url + "&text=" + text, "_blank");
  } 
  else if (platform === "instagram") {
    // Replace "YOUR_URL" with the URL you want to share
    var url = encodeURIComponent("YOUR_URL");
    window.open("https://www.instagram.com/?url=" + url, "_blank");
  } 
   else if (platform === "gmail") {
    // Replace "YOUR_URL" with the URL you want to share
    var url = encodeURIComponent("YOUR_URL");
    window.open("https://www.gmail.com/?url=" + url, "_blank");
  }

  else if (platform === "google") {
    // Replace "YOUR_URL" with the URL you want to share
    var url = encodeURIComponent("YOUR_URL");
    window.open("https://www.gmail.com/?url=" + url, "_blank");
  }

}
function copyLink() {
  var linkToCopy = window.location.href; // Get the current page URL

  navigator.clipboard.writeText(linkToCopy)
    .then(function() {
      var copyLinkTooltip = document.querySelector(".copy-link-tooltip");
      copyLinkTooltip.textContent = "copied to clipboard!";
      copyLinkTooltip.classList.add("show");
      setTimeout(function() {
        copyLinkTooltip.classList.remove("show");
      }, 2000);
    })
    .catch(function(error) {
      console.error("Failed to copy link: ", error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  var linkTextElement = document.getElementById("linkText");
  linkTextElement.textContent = window.location.href;
});





function updateFavoriteCount() {
  var favoriteCountElement = document.getElementById("favoriteCount");
  var count = parseInt(favoriteCountElement.textContent);
  count++;
  favoriteCountElement.textContent = count;
  favoriteCountElement.style.display = "inline"; // Show the count element
}








// Existing reviews (You can add more if needed)
let existingReviews = [
  {
    name: "John Doe",
    rating: 5,
    reviewText: "This movie was amazing! Highly recommended!",
    date: "July 20, 2023",
    avatar: "avatar1.jpg", // Replace with the avatar image URL or set it as null if no avatar is provided.
  },
  {
    name: "Jane Smith",
    rating: 4,
    reviewText: "Great film! Enjoyed every moment.",
    date: "July 22, 2023",
    avatar: "avatar2.jpg", // Replace with the avatar image URL or set it as null if no avatar is provided.
  },
];

// Function to convert the avatar image to a Data URL
function getAvatarDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

// Function to add a new review
async function addReview(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const reviewText = document.getElementById("review").value;
  const avatarInput = document.getElementById("avatar");
  const currentDate = formatDate(new Date());

  let avatarDataURL = null;
  if (avatarInput.files.length > 0) {
    const avatarFile = avatarInput.files[0];
    avatarDataURL = await getAvatarDataURL(avatarFile);
  }

  const newReview = {
    name: name,
    rating: parseInt(rating),
    reviewText: reviewText,
    date: currentDate,
    avatar: avatarDataURL,
  };

  existingReviews.unshift(newReview); // Add the new review to the beginning of the existingReviews array

  saveReviewsToLocalStorage(); // Save the updated reviews to localStorage

  const reviewsContainer = document.getElementById("reviews-container");
  reviewsContainer.insertBefore(createReviewElement(newReview), reviewsContainer.firstChild);

  reviewForm.reset();
}

// Function to create a new review element
function createReviewElement(review) {
  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review");

  const reviewHeader = document.createElement("div");
  reviewHeader.classList.add("review-header");

  const userInfo = document.createElement("div");
  userInfo.classList.add("user-info");

  const userAvatar = document.createElement("img");
  userAvatar.classList.add("user-avatar");
  userAvatar.setAttribute("src", review.avatar ? review.avatar : "default-avatar.jpg");

  const userName = document.createElement("span");
  userName.classList.add("user-name");
  userName.textContent = review.name;

  const userRating = document.createElement("span");
  userRating.classList.add("user-rating");
  userRating.innerHTML = getRatingStars(review.rating);

  userInfo.appendChild(userAvatar);
  userInfo.appendChild(userName);
  userInfo.appendChild(userRating);

  reviewHeader.appendChild(userInfo);

  const reviewDate = document.createElement("span");
  reviewDate.classList.add("review-date");
  reviewDate.textContent = review.date;

  reviewHeader.appendChild(reviewDate);

  reviewContainer.appendChild(reviewHeader);

  const reviewText = document.createElement("p");
  reviewText.classList.add("review-text");
  reviewText.textContent = review.reviewText;

  reviewContainer.appendChild(reviewText);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", (event) => deleteReview(event, review.date, review.name));

  reviewContainer.appendChild(deleteButton);

  return reviewContainer;
}

// Function to get rating stars
function getRatingStars(rating) {
  const stars = '<i class="fa fa-star"></i>'.repeat(rating) + '<i class="fa fa-star-o"></i>'.repeat(5 - rating);
  return stars;
}

// Function to format date
function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Function to delete a review
function deleteReview(event, reviewDate, reviewName) {
  event.stopPropagation();

  // Find the index of the review to delete
  const indexToDelete = existingReviews.findIndex((review) => review.date === reviewDate && review.name === reviewName);

  if (indexToDelete !== -1) {
    // Remove the review from the existingReviews array
    existingReviews.splice(indexToDelete, 1);

    // Save the updated reviews to localStorage
    saveReviewsToLocalStorage();

    // Re-render the reviews
    renderReviews();
  }
}

// Event listener for form submission
const reviewForm = document.getElementById("review-form");
reviewForm.addEventListener("submit", addReview);

// Function to retrieve reviews from localStorage
function getReviewsFromLocalStorage() {
  const storedReviews = localStorage.getItem("reviews");
  return storedReviews ? JSON.parse(storedReviews) : [];
}

// Function to save reviews to localStorage
function saveReviewsToLocalStorage() {
  localStorage.setItem("reviews", JSON.stringify(existingReviews));
}

// Function to render all reviews
function renderReviews() {
  const reviewsContainer = document.getElementById("reviews-container");

  // Clear existing reviews
  reviewsContainer.innerHTML = "";

  // Get all reviews (existing and submitted)
  const allReviews = [...existingReviews, ...getReviewsFromLocalStorage()];

  // Remove duplicates from the allReviews array
  const uniqueReviews = allReviews.filter((review, index, self) => {
    return index === self.findIndex((r) => r.date === review.date && r.name === review.name);
  });

  // Render all reviews
  uniqueReviews.forEach((review) => {
    reviewsContainer.appendChild(createReviewElement(review));
  });
}

// Load existing reviews from localStorage on page load
existingReviews = getReviewsFromLocalStorage();
renderReviews();








