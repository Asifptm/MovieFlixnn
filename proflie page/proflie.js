

// Edit functionality for profile name
const nameContainer = document.getElementById('nameContainer');
const nameEditIcon = document.getElementById('nameEditIcon');
const editNameIcon = document.getElementById('editNameIcon');
const nameInput = document.getElementById('nameInput');

nameEditIcon.addEventListener('click', () => {
  nameContainer.classList.add('editable-text');
  nameInput.style.display = 'block';
  nameInput.value = nameContainer.textContent.trim();
  nameInput.focus();
});

editNameIcon.addEventListener('click', () => {
  nameContainer.classList.add('editable-text');
  nameInput.style.display = 'block';
  nameInput.value = nameContainer.textContent.trim();
  nameInput.focus();
});

nameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    saveNameChange();
  }
});

nameInput.addEventListener('blur', () => {
  saveNameChange();
});

function saveNameChange() {
  const inputValue = nameInput.value.trim();
  nameContainer.textContent = inputValue;
  nameContainer.classList.remove('editable-text');
  nameInput.style.display = 'none';

  // Save the updated name to local storage
  localStorage.setItem('profileName', inputValue);
}

// Edit functionality for profile image
const profileImage = document.getElementById('profileImage');
const editIcon = document.getElementById('editIcon');
const fileInput = document.getElementById('fileInput');

editIcon.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const dataURL = reader.result;
    profileImage.src = dataURL;

    // Save the updated profile image to local storage
    localStorage.setItem('profileImage', dataURL);
  };

  reader.readAsDataURL(file);
});

// Edit functionality for profile details section
const detailsItems = document.querySelectorAll('.profile-details-item');
const editDetailIcons = document.querySelectorAll('.edit-detail-icon');
const detailInputs = document.querySelectorAll('.detail-input');

editDetailIcons.forEach((editIcon, index) => {
  editIcon.addEventListener('click', () => {
    detailsItems[index].classList.add('editable-detail');
    detailInputs[index].style.display = 'block';
    detailInputs[index].value = detailsItems[index].querySelector('.detail-text').textContent.trim();
    detailInputs[index].focus();
  });
});

detailInputs.forEach((input, index) => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveDetailChange(index);
    }
  });

  input.addEventListener('blur', () => {
    saveDetailChange(index);
  });
});

function saveDetailChange(index) {
  const inputValue = detailInputs[index].value.trim();
  detailsItems[index].querySelector('.detail-text').textContent = inputValue;
  detailsItems[index].classList.remove('editable-detail');
  detailInputs[index].style.display = 'none';

  // Save the updated profile detail to local storage
  const detailKey = `profileDetail${index}`;
  localStorage.setItem(detailKey, inputValue);
}

// Load data from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('profileName');
  if (storedName) {
    nameContainer.textContent = storedName;
  }

  const storedImage = localStorage.getItem('profileImage');
  if (storedImage) {
    profileImage.src = storedImage;
  }

  for (let i = 0; i < detailsItems.length; i++) {
    const detailKey = `profileDetail${i}`;
    const storedDetail = localStorage.getItem(detailKey);
    if (storedDetail) {
      detailsItems[i].querySelector('.detail-text').textContent = storedDetail;
    }
  }
});





// Function to open the popup modal
function openModal() {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'block';
  }
  
  // Function to close the popup modal
  function closeModal() {
    const modal = document.getElementById('popupModal');
    modal.style.display = 'none';
  }
  
  // Function to add the social media links
  function addSocialLinks() {
    const socialLinks = {
      facebook: document.getElementById('facebookLink').value.trim(),
      twitter: document.getElementById('twitterLink').value.trim(),
      linkedin: document.getElementById('linkedinLink').value.trim(),
      instagram: document.getElementById('instagramLink').value.trim(),
    };
  
    for (const platform in socialLinks) {
      const link = socialLinks[platform];
      if (link) {
        updateSocialIconLink(platform, link);
        saveLinkToLocalStorage(platform, link);
      }
    }
  
    closeModal();
  }
  
  // Function to update the link of an existing social media icon
  function updateSocialIconLink(platform, link) {
    const socialIconsList = document.querySelectorAll('.social-icons i');
    const iconToUpdate = Array.from(socialIconsList).find((icon) => icon.classList.contains(`fa-${platform}`));
  
    if (iconToUpdate) {
      const linkToUpdate = iconToUpdate.parentElement;
      linkToUpdate.href = link;
    } else {
      addSocialIcon(link, platform);
    }
  }
  
  // Function to add a social media icon
  function addSocialIcon(link, platform) {
    const socialIconsList = document.querySelector('.social-icons');
    const newSocialIcon = document.createElement('i');
    newSocialIcon.classList.add('fab');
    newSocialIcon.classList.add(`fa-${platform}`);
    const newLink = document.createElement('a');
    newLink.href = link;
    newLink.target = '_blank';
    newLink.appendChild(newSocialIcon);
  
    const li = document.createElement('li');
    li.appendChild(newLink);
  
    socialIconsList.appendChild(li);
  }
  
  // Function to save the link to localStorage
  function saveLinkToLocalStorage(platform, link) {
    const links = JSON.parse(localStorage.getItem('socialLinks')) || {};
    links[platform] = link;
    localStorage.setItem('socialLinks', JSON.stringify(links));
  }
  
  // Function to retrieve links from localStorage and update social icons
  function loadSocialLinksFromLocalStorage() {
    const links = JSON.parse(localStorage.getItem('socialLinks')) || {};
    for (const platform in links) {
      updateSocialIconLink(platform, links[platform]);
    }
  }
  
  // Event listener for "Add Link" button click
  const addLinkButton = document.getElementById('add-link-button');
  addLinkButton.addEventListener('click', openModal);
  
  // Event listener for adding the social media links when clicking the "Add Links" button in the modal
  const addSocialButton = document.getElementById('addLinkButton');
  addSocialButton.addEventListener('click', addSocialLinks);
  
  // Event listener for closing the popup modal when clicking the close button
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', closeModal);
  
  // Event listener for adding the social media links when pressing Enter key in the input fields
  const inputFields = document.querySelectorAll('input[type="text"]');
  inputFields.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addSocialLinks();
      }
    });
  });
  
  // Load social links from localStorage on page load
  document.addEventListener('DOMContentLoaded', loadSocialLinksFromLocalStorage);
  


  // back funtion

  $(document).ready(function() {
    
    $("#backIcon").click(function() {
      // Go back to the previous page
      window.history.back();
    });
  });