//Variables

const noteList = document.getElementById('note-list');



// Event Listeners

eventListeners ();

function eventListeners() {
// Listening submit event
document.querySelector('#form').addEventListener('submit', addNote); 

// Listen for click on "X" to remove note
noteList.addEventListener('click', removeNote);

// Document

document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}

function addNote(e){
    e.preventDefault ();
    const note = document.getElementById('note').value;
    
    
    const removeBtn = document.createElement("a");
        removeBtn.classList = 'remove-note';
        removeBtn.textContent = 'X';

    const li = document.createElement("li");
        li.textContent = note;

    li.appendChild(removeBtn);

    noteList.appendChild(li);

    addNoteLocalStorage(note);

    alert('New Note Added');

}
function removeNote(e) {
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove();
    }

    removeNoteFromLocalStorage(e.target.parentElement.textContent);

    alert('Note removed!');
}
function addNoteLocalStorage(note) {
    let notes = getNoteFromStorage();

    notes.push(note);

    localStorage.setItem('notes', JSON.stringify( notes )  );
}

function getNoteFromStorage() {
    let notes;
    const notesLS = localStorage.getItem('notes');

    if(notesLS === null) {
        notes = [];
    }else {
        notes = JSON.parse( notesLS );
    }

    return notes;
}
function localStorageOnLoad() {
    let notes = getNoteFromStorage(); 

    notes.forEach(function(tweet) {
        // Create the remove button
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-note';
        removeBtn.textContent = 'X';

        // Create an <li> element
        const li = document.createElement('li');
        li.textContent = tweet; 
        
        // Add the remove button to each tweet
        li.appendChild(removeBtn);

        // Add to the list
        noteList.appendChild(li);
   });
}

function removeNoteFromLocalStorage(note){
    let notes = getNoteFromStorage();

    const noteDelete = note.substring(0, note.length -1);
    notes.forEach(function(noteLS, index){
        if(noteDelete === noteLS){
            notes.splice(index, 1)
        }

    }); 

    localStorage.setItem('notes', JSON.stringify(notes));
    }