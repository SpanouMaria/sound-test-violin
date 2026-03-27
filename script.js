const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

async function loadSound(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return await audioCtx.decodeAudioData(arrayBuffer);
}

let sounds = {};

// Φόρτωση των ήχων στην αρχή
async function setup() {
    sounds.blue = await loadSound('blue.mp3');
    sounds.red = await loadSound('red.mp3');
}

setup();

let sources = {};

function playSound(color) {
    // Αν ο ήχος είναι ήδη σε παύση, τον ξεκινάμε
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const source = audioCtx.createBufferSource();
    source.buffer = sounds[color];
    source.loop = true;
    source.connect(audioCtx.destination);
    source.start(0);
    sources[color] = source;
}

function stopSound(color) {
    if (sources[color]) {
        sources[color].stop();
        sources[color] = null;
    }
}

const blueBtn = document.getElementById('blueBtn');
const redBtn = document.getElementById('redBtn');

// Events για Μπλε
blueBtn.addEventListener('mousedown', () => playSound('blue'));
blueBtn.addEventListener('touchstart', (e) => { e.preventDefault(); playSound('blue'); });
blueBtn.addEventListener('mouseup', () => stopSound('blue'));
blueBtn.addEventListener('touchend', () => stopSound('blue'));

// Events για Κόκκινο
redBtn.addEventListener('mousedown', () => playSound('red'));
redBtn.addEventListener('touchstart', (e) => { e.preventDefault(); playSound('red'); });
redBtn.addEventListener('mouseup', () => stopSound('red'));
redBtn.addEventListener('touchend', () => stopSound('red'));
