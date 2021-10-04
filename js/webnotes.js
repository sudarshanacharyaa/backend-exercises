console.log("Hey user the webnotes.js has been imported successfully");
showNotes();

let saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener("click", function (e) {

    let textArea = document.getElementById('textArea');

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(textArea.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    textArea.value = "";

    showNotes();
})

// Function to delete a note
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
      <div class="card my-3 mx-3" id="notes" style="width: 18rem; ">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)"  class="btn btn-outline-danger">Delete Note</button>
        </div>
    </div>`;

    });

    let notesElement = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElement.innerHTML = html;
    }
    else {
        notesElement.innerHTML = `<p>No oxygen notes yet! Use "Type in your Oxygen Zone" section on left to make notes.</p>`;
      }
}

// Function to delete a note
function deleteNote(index) {    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }

      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }