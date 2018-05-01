//Variables

const noteList = document.getElementById('note-list');



// Event Listeners

eventListeners ();

function eventListeners() {

document.querySelector('#form').addEventListener('submit', addNote); 
noteList.addEventListener('click', removeNote);
}

function addNote(e){
    e.preventDefault ();
    const note = document.getElementById('note').value;
    
    
    let removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-note';
        removeBtn.textContent = 'X';

    let li = document.createElement('li');
        li.textContent = note;

    li.appendChild(removeBtn);

    noteList.appendChild(li);

}
function removeNote(e) {
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove();
    }
}