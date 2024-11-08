// JavaScript to handle popup functionality
document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
    updateCurrency(); // Initialize currency based on default region
  });

  document.getElementById('popupClose').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });

  document.getElementById('saveButton').addEventListener('click', function() {
    alert('Settings saved');
    document.getElementById('popup').style.display = 'none';
  });

  // Function to update currency based on selected region
  function updateCurrency() {
    const region = document.getElementById('region').value;
    const currencySelect = document.getElementById('currency');

    // Clear current currency options
    currencySelect.innerHTML = '';

    // Define currency options for each region
    const currencyOptions = {
      'United States': ['USD - US Dollar'],
      'Portugal': ['EUR - Euro'],
      'Canada': ['CAD - Canadian Dollar'],
      
      // Add more regions and their currencies as needed
    };

    // Get the currencies for the selected region
    const currencies = currencyOptions[region];

    // Populate the currency dropdown with the relevant options
    currencies.forEach(currency => {
      const option = document.createElement('option');
      option.value = currency.split(' - ')[0]; // Extract currency code
      option.textContent = currency;
      currencySelect.appendChild(option);
    });
  }
    

  var modal = document.getElementById("shareModal");

        function openModal() {
            modal.style.display = "block";
        }

        function closeModal() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }

        function copyLink(event) {
            event.preventDefault();
            var dummyLink = "https://example.com/juneau-vacation-home";
            navigator.clipboard.writeText(dummyLink).then(function() {
                alert("Link copied to clipboard!");
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }


        document.addEventListener('DOMContentLoaded', () => {
            const heartBtn = document.getElementById('heartButton');
            
            // Check localStorage for saved state
            const isLiked = localStorage.getItem('heartState') === 'true';
            if (isLiked) {
                heartBtn.classList.add('active');
            }

            // Toggle heart state
            heartBtn.addEventListener('click', () => {
                heartBtn.classList.toggle('active');
                
                // Save state to localStorage
                const newState = heartBtn.classList.contains('active');
                localStorage.setItem('heartState', newState);
            });
        });

/*-----------------------------change image-----------------------------------------*/
  /*  // Array of image sources
   const imagesSim = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpeg", "img-6.webp", "img-7.jpg", "img-8.jpg", "img-9.jpg", "img-10.jpg", "img-11.jpg", "img-12.jpg", "img-13.jpeg", "img-14.jpeg"];
    
    // Array of titles for each image
    const titlesSim = [
        "Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required",
        "Cozy Cabin Retreat | 1BR | 1BA | Mountain Views",
        "Modern Loft Apartment | 3BR | 2BA | City Center",
        "Beachfront Villa | 4BR | 3BA | Private Pool",
        "Rustic Cottage in the Woods | 2BR | 1BA | Fire Pit",
        "Luxury Condo | 2BR | 2BA | Ocean Views",
        "Charming Bungalow | 3BR | 2BA | Garden Access",
        "Spacious Penthouse | 5BR | 4BA | Rooftop Terrace",
        "Lakefront Lodge | 4BR | 3BA | Dock Included",
        "Countryside Farmhouse | 6BR | 5BA | Pet Friendly",
        "Ski Chalet | 3BR | 2BA | Close to Slopes",
        "Historic Downtown Home | 4BR | 3BA | Walk to Shops",
        "Desert Oasis | 2BR | 2BA | Private Hot Tub",
        "Tropical Paradise | 3BR | 3BA | Beach Access"
    ];
    
    let currentIndexSim = 0;

    // Function to open the modal
    function openModalSim() {
        currentIndexSim = 0; // Start from the first image
        updateModalContent();
        document.getElementById('galleryModalSim').style.display = 'flex';
    }

    // Function to close the modal
    function closeModalSim() {
        document.getElementById('galleryModalSim').style.display = 'none';
    }

    // Function to show the next image
    function nextImageSim() {
        currentIndexSim = (currentIndexSim + 1) % imagesSim.length;
        updateModalContent();
    }

    // Function to show the previous image
    function prevImageSim() {
        currentIndexSim = (currentIndexSim - 1 + imagesSim.length) % imagesSim.length;
        updateModalContent();
    }

    // Function to update the modal content (image, title, and count)
    function updateModalContent() {
        document.getElementById('modalImageSim').src = imagesSim[currentIndexSim];
        document.getElementById('modalTitleSim').textContent = titlesSim[currentIndexSim];
        document.getElementById('imageCountSim').textContent = `${currentIndexSim + 1}/${imagesSim.length}`;
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        const modalSim = document.getElementById('galleryModalSim');
        if (event.target === modalSim) {
            closeModalSim();
        }
    }*/

        // Array of image sources
const imagesSim = [
    "img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", 
    "img-5.jpeg", "img-6.webp", "img-7.jpg", "img-8.jpg", 
    "img-9.jpg", "img-10.jpg", "img-11.jpg", "img-12.jpg", 
    "img-13.jpeg", "img-14.jpeg"
];

// Array of titles for each image
const titlesSim = [
    "Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required",
    "Cozy Cabin Retreat | 1BR | 1BA | Mountain Views",
    "Modern Loft Apartment | 3BR | 2BA | City Center",
    "Beachfront Villa | 4BR | 3BA | Private Pool",
    "Rustic Cottage in the Woods | 2BR | 1BA | Fire Pit",
    "Luxury Condo | 2BR | 2BA | Ocean Views",
    "Charming Bungalow | 3BR | 2BA | Garden Access",
    "Spacious Penthouse | 5BR | 4BA | Rooftop Terrace",
    "Lakefront Lodge | 4BR | 3BA | Dock Included",
    "Countryside Farmhouse | 6BR | 5BA | Pet Friendly",
    "Ski Chalet | 3BR | 2BA | Close to Slopes",
    "Historic Downtown Home | 4BR | 3BA | Walk to Shops",
    "Desert Oasis | 2BR | 2BA | Private Hot Tub",
    "Tropical Paradise | 3BR | 3BA | Beach Access"
];

let currentIndexSim = 0;

// Function to open the modal
function openModalSim() {
    currentIndexSim = 0; // Start from the first image
    updateModalContent();
    document.getElementById('galleryModalSim').style.display = 'flex';
}

// Function to close the modal
function closeModalSim() {
    document.getElementById('galleryModalSim').style.display = 'none';
}

// Function to show the next image
function nextImageSim() {
    if (currentIndexSim < imagesSim.length - 1) {
        currentIndexSim++;
        updateModalContent();
    }
}

// Function to show the previous image
function prevImageSim() {
    if (currentIndexSim > 0) {
        currentIndexSim--;
        updateModalContent();
    }
}

// Function to update the modal content (image, title, and count)
function updateModalContent() {
    // Update the image source and title
    document.getElementById('modalImageSim').src = imagesSim[currentIndexSim];
    document.getElementById('modalTitleSim').textContent = titlesSim[currentIndexSim];
    document.getElementById('imageCountSim').textContent = `${currentIndexSim + 1} / ${imagesSim.length}`;
    
    // Update button states
    const prevButton = document.getElementById('prevButtonSim');
    const nextButton = document.getElementById('nextButtonSim');
    
    // Disable the Previous button if at the first image
    if (currentIndexSim === 0) {
        prevButton.disabled = true;
        prevButton.classList.add('disabled');
    } else {
        prevButton.disabled = false;
        prevButton.classList.remove('disabled');
    }
    
    // Disable the Next button if at the last image
    if (currentIndexSim === imagesSim.length - 1) {
        nextButton.disabled = true;
        nextButton.classList.add('disabled');
    } else {
        nextButton.disabled = false;
        nextButton.classList.remove('disabled');
    }
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modalSim = document.getElementById('galleryModalSim');
    if (event.target === modalSim) {
        closeModalSim();
    }
};

    /*--------------------------------------change image----------------------------*/





    const modalSiam = document.getElementById('travelersModalSiam');
                        const travelersBtnSiam = document.getElementById('travelersBtnSiam');
                        const travelersDisplaySiam = document.getElementById('travelersDisplaySiam');
                        let adultsSiam = 2;
                        let childrenSiam = 0;
                    
                        // Open modal on button click
                        travelersBtnSiam.addEventListener('click', () => {
                            modalSiam.style.display = 'flex';
                        });
                    
                        // Update the traveler count
                        function updateCountSiam(type, change) {
                            if (type === 'adults') {
                                adultsSiam = Math.max(1, adultsSiam + change);
                                document.getElementById('adultsCountSiam').textContent = adultsSiam;
                                document.getElementById('adultsMinusBtnSiam').disabled = adultsSiam === 1;
                            } else {
                                childrenSiam = Math.max(0, childrenSiam + change);
                                document.getElementById('childrenCountSiam').textContent = childrenSiam;
                                document.getElementById('childrenMinusBtnSiam').disabled = childrenSiam === 0;
                            }
                            updateTotalDisplaySiam();
                        }
                    
                        // Display the total number of travelers
                        function updateTotalDisplaySiam() {
                            const totalSiam = adultsSiam + childrenSiam;
                            travelersDisplaySiam.textContent = `${totalSiam} traveler${totalSiam !== 1 ? 's' : ''}`;
                        }
                    
                        // Close modal function
                        function closeModalSiam() {
                            modalSiam.style.display = 'none';
                        }
                    
                        // Close modal when clicking outside the content
                        modalSiam.addEventListener('click', (e) => {
                            if (e.target === modalSiam) {
                                closeModalSiam();
                            }
                        });
                    
                        // Initialize button states
                        document.getElementById('adultsMinusBtnSiam').disabled = adultsSiam === 1;
                        document.getElementById('childrenMinusBtnSiam').disabled = childrenSiam === 0;