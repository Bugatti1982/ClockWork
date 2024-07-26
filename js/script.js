// Selects the clock hands elements from the DOM
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Selects the clock face container from the DOM
const face = document.querySelector('.Face');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog and stores the drop down values in local storage
closeButton.addEventListener("click", () => {
    const hours = document.getElementById("hours").value;
    const minutes = document.getElementById("minutes").value;
    const ampm = document.getElementById("ampm").value;

    const alarmTime = `${hours}:${minutes} ${ampm}`;
    localStorage.setItem("alarmTime", alarmTime);
    dialog.close();
});

// Function to create and position each divot on the clock face
function createDivots() {
    const radius = 140; // Radius for positioning divots from the center
    for (let i = 0; i < 60; i++) {
        // Create a new div element for each divot
        const divot = document.createElement('div');
        divot.classList.add('second-divots'); // Assign base class for styling

        // Add a special class for every 5th divot to make it longer and gray
        if (i % 5 === 0) {
            divot.classList.add('long-gray-divot');
        }

        // Rotate each divot and position it outward from the center
        divot.style.transform = `rotate(${i * 6 - 90}deg) translateY(-${radius}px)`;
        face.appendChild(divot); // Append the divot to the clock face
    }
}

function addZeros(z) {
    //Adds 0's in front of single digits in minutes and seconds
    if (z < 10) {
        z = "0" + z
    }
    return z
}

function limithour(i) {
    //Limits to 12 hour timeframe
    if (i > 12) {
        i -= 12
    }
    return i
}


function realtime() {
    var today = new Date()
    //Pulls current date and time
    var h = today.getHours()
    //Pulls strictly the hours and puts it into a variable
    //Same is done for minutes and seconds
    var m = today.getMinutes()
    var s = today.getSeconds()

    h = limithour(h)
    m = addZeros(m)
    s = addZeros(s)

    // Convert seconds to degrees, starting from the top (0 degrees)
    const secondsDegrees = ((s / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // Apply rotation

    // Convert minutes to degrees, including seconds for accuracy
    const minutesDegrees = ((m / 60) * 360) + ((s / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`; // Apply rotation

    // Convert hours to degrees, including minutes for accuracy
    const hoursDegrees = ((h / 12) * 360) + ((m / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`; // Apply rotation



    document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " ";
    //Note: The innerHTML property is used to update the items being pushed every time it's updating
    setTimeout(function () {
        // Sets a transition between each half second that is passed
        //Remember, time is measured in milliseconds
        realtime()
        //Takes realtime as the function in the parameter for setTimout
    }, 500)
}

// Initialize the clock by setting up divots and hands
function initClock() {
    createDivots(); // Create and position the divots on the clock face
    realtime(); //Calls the calculations for the times and sets position of hands
}

// Call the initialization function to start the clock
initClock();


