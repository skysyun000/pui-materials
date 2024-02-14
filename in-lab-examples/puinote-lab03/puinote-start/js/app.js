// Todo: try console.log
console.log("start implementation");
// Todo: create an updateElement() function that can modify HTML elements
function updateElement(){
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');//calling the image
    // noteImageElement.src = 'assets/warhol-frog.png';//changing the img source 
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');

    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
    console.log(noteImageElement);
}

// Todo: create a submitNote() function to grab user input and update notecard
function submitNote(){
    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');

    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;
    // console.log(editorTitleElement); just to check if this function is working 
    updateElement();
}


// Todo: create an object
let notecard = {
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-frog.png',
}
// Todo: grab a specific notecard element
notecard.element = document.querySelector('#notecard-one');
// Todo: add a click event
const btnSubmit = document.querySelector('#btn-submit')
btnSubmit.onclick = submitNote;//when it is triggered it is equal to the function