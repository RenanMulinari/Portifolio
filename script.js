const dots = document.querySelectorAll('.dot[data-project]');
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');

const projects = {
  1: { title: "Projeto 1", desc: "Descrição breve do Projeto 1. Em breve mais detalhes." },
  2: { title: "Projeto 2", desc: "Descrição breve do Projeto 2. Em breve mais detalhes." },
  3: { title: "Projeto 3", desc: "Descrição breve do Projeto 3. Em breve mais detalhes." },
  4: { title: "Projeto 4", desc: "Descrição breve do Projeto 4. Em breve mais detalhes." }
};

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const id = dot.getAttribute('data-project');
    const proj = projects[id];
    modalTitle.textContent = proj.title;
    modalDesc.textContent = proj.desc;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
});

window.addEventListener("load", () => {
  document.querySelector(".content").style.opacity = "1";
});