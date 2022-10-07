if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}

let scren = document.getElementById('scren');
let buttons = document.querySelectorAll('button');
let screnValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log(buttonText)
        if (buttonText == 'X') {
            buttonText = "*"
            screnValue += buttonText;
            scren.value = screnValue;
        }
        else if (buttonText == 'C') {
            screnValue = "";
            scren.value = screnValue;
        }
        else if (buttonText == 'D') {
            screnValue = "";
            scren.value = screnValue;
        }
        else if (buttonText == '=') {
            scren.value = eval(screnValue);
        }
        else {
            screnValue += buttonText;
            scren.value = screnValue;
        }
    })
}