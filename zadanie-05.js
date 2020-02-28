const buttons = document.getElementsByTagName(`button`);

for (let i = 0; i < buttons.length; i++) {
    const current = buttons[i];

    current.onclick = function () {
        const text = this.getAttribute(`data-text`);
        document.getElementById(`container`).innerHTML = text;
    };
}
