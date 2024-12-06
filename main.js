

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


const texts = ["Divyanshu Mathur", "Data Analyst", "Frontend Developer"];
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



// document.addEventListener('DOMContentLoaded', () => {
//     const texts = ["Divyanshu Mathur", "Data Analyst", "Frontend Developer"];
//     const typingElement = document.getElementById('typing-text');

//     // Check if element is found
//     if (!typingElement) {
//         console.error("Element with ID 'typing-text' not found!");
//         return;
//     }

//     let textIndex = 0;
//     let charIndex = 0;
//     let isTyping = true;

//     function typeText() {
//         console.log("Typing text:", texts[textIndex]); // Debug: Current text being typed
//         if (charIndex < texts[textIndex].length) {
//             if (isTyping) {
//                 typingElement.textContent += texts[textIndex].charAt(charIndex);
//                 charIndex++;
//                 setTimeout(typeText, 80); // Adjust typing speed here
//             }
//         } else {
//             isTyping = false;
//             setTimeout(() => {
//                 eraseText();
//             }, 1000); // Delay before erasing
//         }
//     }

//     function eraseText() {
//         console.log("Erasing text:", texts[textIndex]); // Debug: Current text being erased
//         if (charIndex > 0) {
//             typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
//             charIndex--;
//             setTimeout(eraseText, 50); // Adjust erasing speed here
//         } else {
//             isTyping = true;
//             textIndex = (textIndex + 1) % texts.length;
//             setTimeout(typeText, 500); // Delay before typing next word
//         }
//     }

//     // Start typing effect
//     console.log("Starting typing effect...");
//     typeText();
// });
