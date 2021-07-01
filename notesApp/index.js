const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");

//Clear All Notes:
clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure to delete all notes?")) {
    localStorage.clear();
    window.location.reload();
  }
});
//Store/Retrive data from localStorage:
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => addNote(note));
}

addBtn.addEventListener("click", () => addNote());

//Add a note in DOM:
function addNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
      <button class="edit">
      <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
      <i class="fas fa-trash-alt"></i>
      </button>
  </div>

  <div class="main ${text ? "" : "hidden"}">  </div>
       <textarea class="${
         text ? "hidden" : ""
       }" name="textarea" id="textarea"></textarea>
    `;
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  textarea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
    textarea.focus();
  });
  textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });
  document.body.appendChild(note);
}
//update local storage:
function updateLS() {
  let noteTxt = document.querySelectorAll("textarea");
  const notes = [];
  noteTxt.forEach((note) => {
    notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
}

//For searching:
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputValue = search.value;
  let notes = document.getElementsByClassName("note");
  Array.from(notes).forEach(function (element) {
    let noteTxt = element.innerText.toLowerCase(inputValue);
    if (noteTxt.includes(inputValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
