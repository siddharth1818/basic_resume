
// Get a reference to the div element using its ID
var divElement = document.getElementById("myDiv");

// Change the styles of the div element
divElement.style.color = "blue";            // Change text color to blue
divElement.style.backgroundColor = "yellow"; // Change background color to yellow
divElement.style.margin = "20px";           // Add a margin of 20px
divElement.style.padding = "10px";          // Add a padding of 10px
divElement.style.fontSize = "18px";         // Change font size to 18px
divElement.style.fontWeight = "bold";       // Set font weight to bold
divElement.style.height = "200px";          // Change height to 200px
divElement.style.width = "300px";           // Change width to 300px


// Add event listeners for mouseover and mouseout
divElement.addEventListener("mouseover", function() {
    // Change text color to red when the cursor is over the div
    this.style.color = "red";
});

divElement.addEventListener("mouseout", function() {
    // Revert text color to blue when the cursor leaves the div
    this.style.color = "blue";
});
