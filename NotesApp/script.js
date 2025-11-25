const container = document.querySelector(".container");

// localStorage.clear();


window.addEventListener("load", () => {
  container.innerHTML = localStorage.getItem("notesHTML") || 
  `<div class="main">
  <div class="header">
      <span class="add">&plus;</span>
      <span class="delete">&#x2716;</span>
      <span class="save"> &#x1F4BE; </span>
  </div>
  <div class="notes">
      <textarea name="text"></textarea>
  </div>
</div>`;
  
//   const textbox = document.getElementById("textbox");
//   textbox.innerHTML = localStorage.getItem("textBoxContent") || "";
});

function saveAll() {
    // console.log(container.innerHTML)
    document.querySelectorAll("textarea").forEach(t => {
      t.innerHTML = t.value;  
    });

    localStorage.setItem("notesHTML", container.innerHTML);
}

function addNotePad(){
  const mainDiv = document.createElement('div');
  mainDiv.className = "main";
  mainDiv.innerHTML = `
    <div class="header">
      <span class="add">&plus;</span>
      <span class="delete">&#x2716;</span>
      <span class="save">&#x1F4BE; </span>
    </div>
    <div class="notes">
      <textarea name="text"></textarea>
    </div>
  `;
  container.appendChild(mainDiv);
  // localStorage.setItem("textBoxContent", container.innerHTML);
  saveAll();
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    addNotePad();
  }

  if (e.target.classList.contains("delete")) {
    const note = e.target.closest(".main");
    if (note) {
      note.remove();
      saveAll();
    }
  }
});


container.addEventListener("input", (e) => {
  if (e.target.tagName === "TEXTAREA") {
    saveAll();
  }
});


function showSaved() {
  console.log(1)
  const msg = document.getElementById("status");
  msg.style.display = "block";     

  setTimeout(() => {
    msg.style.display = "none";    
  }, 1000);
}

container.addEventListener("click", (e) => {
  if(e.target.classList.contains("save")){
    showSaved();
  }
})