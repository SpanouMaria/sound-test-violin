const blueSound = new Audio('blue.mp3');
const redSound = new Audio('red.mp3');

// Ρυθμίζουμε να παίζουν συνέχεια όσο είναι πατημένα
blueSound.loop = true;
redSound.loop = true;

const blueBtn = document.getElementById('blueBtn');
const redBtn = document.getElementById('redBtn');

// Λειτουργία έναρξης ήχου
const startBlue = (e) => { e.preventDefault(); blueSound.play(); };
const startRed = (e) => { e.preventDefault(); redSound.play(); };

// Λειτουργία παύσης ήχου
const stopBlue = () => { blueSound.pause(); blueSound.currentTime = 0; };
const stopRed = () => { redSound.pause(); redSound.currentTime = 0; };

// Events για το Μπλε Κουμπί (Ποντίκι + Αφή)
blueBtn.addEventListener('mousedown', startBlue);
blueBtn.addEventListener('mouseup', stopBlue);
blueBtn.addEventListener('touchstart', startBlue);
blueBtn.addEventListener('touchend', stopBlue);

// Events για το Κόκκινο Κουμπί (Ποντίκι + Αφή)
redBtn.addEventListener('mousedown', startRed);
redBtn.addEventListener('mouseup', stopRed);
redBtn.addEventListener('touchstart', startRed);
redBtn.addEventListener('touchend', stopRed);
