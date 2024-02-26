class Notecard{
    constructor(imageURL, title, body){
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;

        this.element = null;
    }
}
function  createElement(notecard){
    const template = document.querySelector('#notecard-template');
    const clone = template.textContent.cloneNote(true);
    notecard.element = clone.querySelector('.notecard');

    const notecardListElement = document.querySelector('#notecard-list');
    notecardListElement.prepend(notecard.element);

    updateElement(notecard);
}

function updateElement(notecard){
    const noteImageElement = notecard.element.querySelector(".notecard-thumbnail");
    const noteTitleElement = notecard.element.querySelector(".notecard-title");
    const noteBodyElement = notecard.element.querySelector(".notecard-body");

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
}

const notecardSet = new Set();

function addNewNote(imageURL, title, body){
    const notecard = new Notecard(imageURL, title, body);
    notecardSet.add(notecard);
    return notecard;
}

function deleteNote(notecard){
    notecard.element.remove();
    notecardSet.delete(notecard);
}

const notecardOne = addNewNote(
    "./assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
);

const noteCardTwo = addNewNote(
    "./assets/warhol-frog.png",
    "The first note title",
    "The first note body"
);

for(const notecard of notecardSet){
    createElement
}