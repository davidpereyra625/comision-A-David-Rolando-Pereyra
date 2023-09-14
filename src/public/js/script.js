const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");

let html = "";
let option = "";
let idForm = "";

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPoster = document.getElementById("inputPoster");

btnCrear.addEventListener("click", () => {
  option = "new";
  btnSave.textContent = "new";
  inputTitle.value = "";
  inputDescription.value = "";
  inputPoster.value = "";
  myModal.show();
});

// evento para eliminar
document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        const article = event.target.closest('.col-4')
        const idArticle = article.dataset.id
        
        Swal.fire({
          title: "¿Estás seguro de eliminar?",
          text: "¡No podrás revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "¡Si, Eliminar!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/api/tasks/${idArticle}`, {
              method: "DELETE",
            })
              .then((res) => {
                if (res.ok) {
                  article.remove();
                }
              })
              .catch((err) => {
                console.error(err);
              });
            Swal.fire("Emininado!", "Tu archivo ha sido eliminado.", "success");
          }
        });
    }
})
//Evento para editar
document.addEventListener("click", (event) => {
  if (event.target.matches("#btn-edit")) {
    const article = event.target.closest(".col-4");

    const idArticle = article.dataset.id;
    const urlPosterEdit = article.children[0].children[0].src;
    const titleEdit = article.children[0].children[1].children[0].textContent;
    const descriptionEdit =
      article.children[0].children[1].children[1].textContent;

    idForm = idArticle;
    inputTitle.value = titleEdit;
    inputDescription.value = descriptionEdit;
    inputPoster.value = urlPosterEdit;
    option = "edit";
    btnSave.textContent = "Edit";
    myModal.show();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submit");

  if (option === "new") {
    const newTask = {
      title: inputTitle.value,
      description: inputDescription.value,
      poster: inputPoster.value,
    };

    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(res => {
      console.log(res)
        if (res.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your save has been saved',
            showConfirmButton: false,
            timer: 5000
          })
          myModal.hide();
          location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (option === "edit") {
    const newTask = {
      title: inputTitle.value,
      description: inputDescription.value,
      poster: inputPoster.value,
    };

    fetch(`http://localhost:3000/api/tasks/${idForm}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Editar has been saved',
        showConfirmButton: true,
        timer: 1500
      })
      if(res.ok){
        myModal.hide();
        location.reload();
      }
    })
  }
});

