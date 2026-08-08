const logoutBtn = document.getElementById("logoutBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Logout
logoutBtn.onclick = () => {
    if (confirm("Logout from Dashboard?")) {
        window.location.href = "Login.html";
    }
};

// Download PDF
downloadBtn.onclick = () => {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Read latest data
    const noise = localStorage.getItem("latestNoise") || "0 dB";
    const voltage = localStorage.getItem("latestVoltage") || "0 V";
    const power = localStorage.getItem("latestPower") || "0 W";
    const efficiency = localStorage.getItem("latestEfficiency") || "0 %";
    const battery = localStorage.getItem("latestBattery") || "0 %";
    const prediction = localStorage.getItem("latestPrediction") || "0 W";
    const time = localStorage.getItem("latestTime") || "--";

    const history = JSON.parse(localStorage.getItem("energyHistory")) || [];

    // ===== Header =====
    doc.setFillColor(8, 145, 178);
    doc.rect(0, 0, 210, 25, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text("Noise Energy Generation System", 20, 16);

    doc.setTextColor(0, 0, 0);

    // ===== Project Info =====
    doc.setFontSize(14);
    doc.text("Project Report", 20, 35);

    doc.setFontSize(11);
    doc.text("Generated On : " + new Date().toLocaleString(), 20, 43);

    // ===== Latest Readings =====
    doc.setFontSize(14);
    doc.text("Latest Dashboard Data", 20, 58);

    doc.setFontSize(11);

    doc.text("Time           : " + time, 20, 70);
    doc.text("Noise Level    : " + noise, 20, 78);
    doc.text("Voltage        : " + voltage, 20, 86);
    doc.text("Power          : " + power, 20, 94);
    doc.text("Efficiency     : " + efficiency, 20, 102);
    doc.text("Battery Level  : " + battery, 20, 110);
    doc.text("AI Prediction  : " + prediction, 20, 118);

    // ===== History =====
    let y = 135;

    doc.setFontSize(14);
    doc.text("Energy History", 20, y);

    y += 10;

    doc.setFontSize(10);

    doc.text("Time", 20, y);
    doc.text("Noise", 75, y);
    doc.text("Power", 120, y);
    doc.text("Battery", 165, y);

    y += 5;
    doc.line(20, y, 190, y);

    y += 8;

    history.slice().reverse().forEach((item) => {

        if (y > 270) {
            doc.addPage();
            y = 20;

            doc.setFontSize(10);
            doc.text("Time", 20, y);
            doc.text("Noise", 75, y);
            doc.text("Power", 120, y);
            doc.text("Battery", 165, y);

            y += 5;
            doc.line(20, y, 190, y);
            y += 8;
        }

        doc.text(item.time, 20, y);
        doc.text(item.noise, 75, y);
        doc.text(item.power, 120, y);
        doc.text(item.battery, 165, y);

        y += 8;
    });

    // ===== Footer =====
    y += 10;

    if (y > 270) {
        doc.addPage();
        y = 20;
    }

    doc.setFontSize(12);
    doc.text("Thank you for using Noise Energy Generation System.", 20, y);

    doc.save("NoiseEnergyReport.pdf");
};