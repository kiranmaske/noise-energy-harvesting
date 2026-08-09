function saveSettings(){

    localStorage.setItem(
        "darkMode",
        document.getElementById("darkMode").checked
    );

    localStorage.setItem(
        "themeColor",
        document.getElementById("themeColor").value
    );

    localStorage.setItem(
        "notification",
        document.getElementById("notification").checked
    );

    localStorage.setItem(
        "refresh",
        document.getElementById("refresh").checked
    );

    localStorage.setItem(
        "defaultMode",
        document.getElementById("mode").value
    );

    alert("Settings Saved Successfully.");

}

function clearHistory(){

    if(confirm("Clear History?")){

        localStorage.removeItem("energyHistory");

        alert("History Cleared.");

    }

}

function resetSettings(){

    localStorage.clear();

    alert("Settings Reset.");

    location.reload();

}

window.onload=()=>{

    document.getElementById("darkMode").checked=
    localStorage.getItem("darkMode")==="true";

    document.getElementById("notification").checked=
    localStorage.getItem("notification")==="true";

    document.getElementById("refresh").checked=
    localStorage.getItem("refresh")!=="false";

    document.getElementById("mode").value=
    localStorage.getItem("defaultMode") || "Simulation";

    document.getElementById("themeColor").value=
    localStorage.getItem("themeColor") || "#00ffff";

}