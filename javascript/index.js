const btn = document.querySelector("#openModalButton");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const form = document.getElementById("form");


const openModal = () => {
  modal.style.display = "flex";
};

const closeModal = (e) => {
  modal.style.display = "none";
};

const tomato = () => {
    console.log('i am submiting')
  openModal();
};



btn.addEventListener("click", tomato);
modal.addEventListener('click', closeModal)
