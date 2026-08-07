const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.onclick = () => {

    if(confirm("Logout?")){
        window.location.href = "Login.html";
    }

};

const history =
JSON.parse(localStorage.getItem("energyHistory")) || [];

const labels = [];
const noise = [];
const power = [];

history.forEach(item=>{

    labels.push(item.time);

    noise.push(
        parseFloat(item.noise)
    );

    power.push(
        parseFloat(item.power)
    );

});

const ctx =
document.getElementById("analyticsChart");

new Chart(ctx,{

    type:"line",

    data:{

        labels:labels,

        datasets:[

        {

            label:"Noise (dB)",

            data:noise,

            borderColor:"#06b6d4",

            backgroundColor:"rgba(6,182,212,.25)",

            fill:true,

            tension:.4

        },

        {

            label:"Power (W)",

            data:power,

            borderColor:"#22c55e",

            backgroundColor:"rgba(34,197,94,.25)",

            fill:true,

            tension:.4

        }

        ]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{
                labels:{
                    color:"white"
                }
            }

        },

        scales:{

            x:{

                ticks:{
                    color:"white"
                }

            },

            y:{

                beginAtZero:true,

                ticks:{
                    color:"white"
                }

            }

        }

    }

});