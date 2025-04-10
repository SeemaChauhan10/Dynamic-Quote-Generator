const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "The best way to predict the future is to invent it. – Alan Kay",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Dream big and dare to fail. – Norman Vaughan",
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    "Fall seven times and stand up eight. – Japanese Proverb",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Act as if what you do makes a difference. It does. – William James",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown"
  ];
  

 
function generating(){ 
const quote = document.querySelector('#quote');
const index = Math.floor(Math.random()*quotes.length);
quote.innerHTML = quotes[index];
}
setInterval(generating,2000);

function getRandomColor() {
    // Generate a random color in hexadecimal format
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const wholebody = document.getElementById('zero');
  function changeBackgroundColor() {
    // Apply the random color to the body's background
    const randomColor = getRandomColor();
    wholebody.style.backgroundColor = randomColor;
  }
  setInterval(changeBackgroundColor,2000);

