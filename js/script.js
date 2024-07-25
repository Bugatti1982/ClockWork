function addZeros(z) {
    if (z < 10) {
        z = "0" + z
    }
    return z
}

function limithour(i) {
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

    document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " ";
    //Note: The innerHTML property is used to update the items being pushed every time it's updating
    setTimeout(function () {
        // Sets a transition between each half second that is passed
        //Remember, time is measured in milliseconds
        realtime()
        //Takes realtime as the function in the parameter for setTimout
    }, 500)
}

realtime()


