const searchInput = document.getElementById("home-page-search");
        searchInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                event = event.keyCode ? event.keyCode : event.keyCode.toFixed(2)

                alert("You pressed Enter. Implement your search functionality here.");
            }
        });



const featureKvElements = document.getElementsByClassName("feature-kv");
const ctaButtons = document.getElementsByClassName("cta");

const homePageSearchInput = document.getElementById("home-page-search");

if (homePageSearchInput) {
  homePageSearchInput.addEventListener("input", (event) => {
    const searchValue = event.target.value;
  });
}



// =============================================================================

// Example JavaScript to handle color and memory selection
document.querySelectorAll('.color-chip input').forEach(function (radio) {
  radio.addEventListener('click', function () {
      // Add code to update the selected color
  });
});

document.querySelectorAll('.capacity-chip input').forEach(function (radio) {
  radio.addEventListener('click', function () {
      // Add code to update the selected memory option
  });
});



// ======================================================================
// Example JavaScript to handle the "Buy now" button click
document.querySelector('.cta-button').addEventListener('click', function () {
  // Add code to handle the click, e.g., redirecting to the purchase page
  // You can use the href attribute of the link for the redirect
});


// ========================================================

// Example JavaScript to handle the "Buy now" button click
document.querySelector('.cta-button').addEventListener('click', function () {
  // Add code to handle the click, e.g., redirecting to the purchase page
  // You can use the href attribute of the link for the redirect
});


// ==================================================

// Example JavaScript to handle the "Buy now" button click
document.querySelector('.cta-button').addEventListener('click', function () {
  // Add code to handle the click, e.g., redirecting to the purchase page
  // You can use the href attribute of the link for the redirect
});

