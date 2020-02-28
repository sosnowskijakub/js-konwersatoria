document.addEventListener(`DOMContentLoaded`, (event) => {

    const buttons = document.getElementsByTagName(`button`);

    buttons[0].onclick = function () {
        const list = document.getElementById(`shopping-list`);

        const li = document.createElement(`li`);
        li.appendChild(document.createTextNode(`chleb`));

        list.appendChild(li);
    };

    buttons[1].onclick = function () {
        const list = document.getElementById(`shopping-list`);
        const last = list.children[list.children.length - 1];

        list.removeChild(last);
    };

    buttons[2].onclick = function () {
        const list = document.getElementById(`shopping-list`);
        const element = document.getElementById(`shopping-list`).children[1];
        if (element) {
            const clone = element.cloneNode(true);
            list.appendChild(clone);
        }
    };

})
