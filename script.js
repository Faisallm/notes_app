// select the note container
const notesContainer = document.querySelector(".notes-container");
// select the create note button
const createBtn = document.querySelector(".btn");
// select all note input box area
// this will select all elements with...
// className (.input-box)
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

// localStorage for storing notes
function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    // create a paragraph element
    let inputBox = document.createElement('p');
    // create an image element
    let img = document.createElement('img');
    // set the class name for the paragraph element
    inputBox.className = "input-box"
    // set an attribute for the paragraph
    inputBox.setAttribute('contenteditable', 'true')
    // set the source of the image
    img.src = 'images/delete.png';
    // append the img to the inputBox
    // append the inputBox to the notes container 
    notesContainer.appendChild(inputBox).appendChild(img);
})


notesContainer.addEventListener('click', function(e) {

    // if what we click is an image...
    // when wanting to delete a note
    if (e.target.tagName === "IMG") {
        // remove the parent element of the image...
        // which is the <p> element
        e.target.parentElement.remove()
        updateStorage();
    }

    // when after typing a note and we want...
    // to save its content
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            // when we remove our key/mouse from inside p
            // save the contents to local storage.
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }

})

// to enable the enter newline button to work on p.
document.addEventListener('keydown', event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
