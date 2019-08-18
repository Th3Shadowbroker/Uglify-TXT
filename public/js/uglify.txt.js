const textbox = document.getElementById('textbox');

function addAtCursor(text) {

    const value = textbox.value;

    const start = textbox.selectionStart;
    const end = textbox.selectionEnd;

    textbox.value = value.substring(0, start) + randomizeMode(text) + value.substring(end);

    textbox.selectionStart = textbox.selectionEnd = start + text.length;

    textbox.focus();
}

function randomizeMode(txt) {
    let splitted = txt.split('');
    let out = '';

    for ( let i = 0; i < splitted.length; i++ ) {
        const char = splitted[i];
        const mode = Math.floor( Math.random() * 2 );
        out += mode === 0 ? char.toUpperCase() : char.toLowerCase();
    }

    return out;
}

textbox.addEventListener('keypress', ev => {
    if (ev.key.length > 0) addAtCursor(ev.key);
    ev.preventDefault();
});

textbox.addEventListener('paste', ev => {
    const input = ev.clipboardData.getData('text/plain');
    addAtCursor( randomizeMode(input) );
    ev.preventDefault()
});

document.getElementById('share-twitter').addEventListener('click', ev => {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURI( textbox.value ), 'blank');
    ev.preventDefault();
});

window.DOP_config = {
    position: "bottom-right",
    enableAnalytics: false,
    color: "#FFFFF",
    links: {
        patreon: "https://patreon.com/m4taiori",
    }
};
