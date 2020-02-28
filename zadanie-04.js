//1

const elements = document.getElementsByClassName(`sample_class`);

function getTagsOfElements(elements) {
    let tags = [];
    for (let i = 0; i < elements.length; i++) {
        tags.push(elements[i].tagName);
    }
    return tags;
}

console.log(getTagsOfElements(elements));

//2

const element = document.getElementById(`sample_id`);

function getClassesOfElement(element) {
    let results = [];
    const classes = element.classList;

    for (let i = 0; i < classes.length; i++) {
        results.push(classes[i]);
    }

    return results;
}

console.log(getClassesOfElement(element));

//3

const elements2 = document.getElementsByClassName(`sample_class_2`);
const list = elements2[0].getElementsByTagName(`li`);

function getInnerTextsOfElements(elements) {
    let results = [];

    for (let i = 0; i < elements.length; i++) {
        results.push(elements[i].textContent);
    }

    return results;
}

console.log(getInnerTextsOfElements(list));

//4

const links = document.getElementsByTagName(`a`);

function getAddressesOfElements(elements) {
    let results = [];

    for (let i = 0; i < elements.length; i++) {
        results.push(elements[i].getAttribute(`href`));
    }

    return results;
}

console.log(getAddressesOfElements(links));

//5

const childs = document.getElementsByClassName(`sample_class_3`)[0].children;

getTagsOfElements(childs);

console.log(getTagsOfElements(childs));
