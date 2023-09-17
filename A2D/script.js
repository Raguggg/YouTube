document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const jsonTable = document.getElementById("jsonTable");

    // Function to display JSON data one by one in reverse order
    function displayData(data) {
        output.innerHTML = "";
        jsonTable.style.display = "table";
        jsonToTable(data);
    }
    

    fetch('./soldiers.json')
        .then(response => response.json())
        .then(data => {
            // Call the function to display data
            displayData(data);
        })
        .catch(error => console.error('Error loading JSON:', error));
    fetch('./letter.json')
        .then(response => response.json())
        .then(data => {
            // Call the function to display data
            jsonTable_letter(data);
        })

});
// Function to convert JSON data to a table
function jsonToTable(jsonData) {
    const table = document.getElementById("jsonTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < jsonData.length; i++) {
        const row = tbody.insertRow(i);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerHTML = jsonData[i]['rank'];
        cell2.innerHTML = '💂'+jsonData[i]['soldiers'];
        cell3.innerHTML = jsonData[i]['no of comments'].toLocaleString();
    }
}

function jsonTable_letter(jsonData) {
    const table = document.getElementById("letter");
    const tbody = table.getElementsByTagName("tbody")[0];
    for (let i = 0; i < jsonData.length; i++) {
        const row = tbody.insertRow(i);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        cell1.innerHTML = i+1;
        cell2.innerHTML = jsonData[i]['letter'];
        cell3.innerHTML = jsonData[i]['count'].toLocaleString();
    }
}




document.addEventListener("DOMContentLoaded", function () {
          // Initialize ScrollMagic
          const controller = new ScrollMagic.Controller();

          // Create a GSAP timeline for the animation
          const tableAnimation = gsap.timeline();
  
          // Define the animation properties
          tableAnimation.from(".animate-table", { opacity: 0, y: 100, duration: 1, stagger: 0.2 });
  
          // Create a ScrollMagic scene for the animation
          new ScrollMagic.Scene({
              triggerElement: ".animate-table",
              triggerHook: 0.9, // Adjust this value for the trigger point
              reverse: false, // Set to false to keep the animation active
          })
          .setTween(tableAnimation)
          .addTo(controller);
    
    // ... Your existing code ...
    fetch('./long_nest_order.json')
    .then(response => response.json())
    .then(data => {
        // Call the function to display data
        video_nested(data);
    })
    // Function to create a video card for each item in the data array
    function createVideoCard(data) {
        const col = document.createElement("div");
        col.classList.add("col-md-4"); 
        const card = document.createElement("div");
        card.classList.add("video-card");
        const link = document.createElement("a");
        link.href = data[2];
        link.target = "_blank";

        link.innerHTML = `
            <img src="${data[0]['author_thumbnail']}" alt="${data[0].author}">
            <div class="video-title">⚔️${data[0].author}💂</div>
            <div class="replays-count">Number of Replays: ${data[1]}</div>
        `;

        card.appendChild(link);
        col.appendChild(card);

        return col;
    }


    // Loop through the videoData array and generate video cards
    function video_nested(videoData) {  
        const videoContainer = document.getElementById("video-container");
        videoData.forEach(video => {
            const card = createVideoCard(video);
            videoContainer.appendChild(card);
        });
    }
   
});


