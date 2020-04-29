const pressed = [];
const secretCode = 'monday';

window.addEventListener('keyup', (e) => {

    /* Storing pressed keys in an Array */
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    /* Convert to string and check if it has the code inside */
    if (pressed.join('').includes(secretCode)) {
        /* You win :) */
        cornify_add();
    }
})