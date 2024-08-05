const scriptURL = 'https://script.google.com/macros/s/AKfycbz_m0g0Z7v89BKb1T57o92AXMD1M112sOyGJ0KWBdwTHeE-63__A5EGCv_8j2-0HyBJ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemeu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemeu.style.right = "-200px";
}


const texts = ["Divyanshu Mathur 👋","Student 👋", "Frontender 👋", "Innovator 👋"];
const typingElement = document.getElementById('typing-text');
let textIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        if (isTyping) {
            typingElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 80); // Adjust typing speed here
        }
    } else {
        isTyping = false;
        setTimeout(() => {
            eraseText();
        }, 1000); // Delay before erasing
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Adjust erasing speed here
    } else {
        isTyping = true;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Delay before typing next word
    }
}

// Start typing effect
typeText();
