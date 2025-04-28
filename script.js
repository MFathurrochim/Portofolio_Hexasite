const anu = document.querySelectorAll('.Kepala');

anu.forEach(Kepala => {
  Kepala.addEventListener('click', ()=> {
    const induk = Kepala.parentElement;
    induk.classList.toggle('aktif');
  })
})