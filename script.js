const quotes = [
    {
        quote: "“To burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.”",
        author: "— Federico García Lorca"
    },
    {
        quote: "“Hard work beats talent when talent fails to work hard.”",
        author: "— Tim Notke"
    },
    {
        quote: "“Every grandmaster was once a beginner.”",
        author: "— Irving Chernev"
    },
    {
        quote: "“The more that you read, the more things you will know.”",
        author: "— Dr. Seuss"
    }
];

let index = 0;

const factBtn = document.getElementById("factBtn");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

factBtn.addEventListener("click", () => {
    index = (index + 1) % quotes.length;
    
    quoteText.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {
        quoteText.textContent = quotes[index].quote;
        quoteAuthor.textContent = quotes[index].author;
        quoteText.style.opacity = "1";
        quoteAuthor.style.opacity = "1";
    }, 200);
});

function showHobby(title, detail, btnElement) {
    document.getElementById("hobbyTitle").textContent = title + ":";
    document.getElementById("hobbyDesc").textContent = detail;

    const items = document.querySelectorAll('.hobby-item');
    items.forEach(item => item.classList.remove('active'));
    btnElement.classList.add('active');
}

// Dark / Light Theme Toggle
const themeBtn = document.getElementById("themeBtn");
let isDark = false;

themeBtn.addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
        document.body.setAttribute("data-theme", "dark");
        themeBtn.textContent = "☀️";
    } else {
        document.body.removeAttribute("data-theme");
        themeBtn.textContent = "🌙";
    }
});