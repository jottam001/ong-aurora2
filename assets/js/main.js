
document.addEventListener('DOMContentLoaded', () => {
  const burger=document.querySelector('.burger');const menu=document.querySelector('.menu');
  if(burger&&menu){burger.addEventListener('click',()=>menu.classList.toggle('open'))}
  const items=document.querySelectorAll('.menu > li > a');
  items.forEach(a=>{a.addEventListener('keydown',e=>{
    const parent=a.parentElement;const submenu=parent.querySelector('.submenu');
    if(e.key==='ArrowDown'&&submenu){submenu.style.display='block';const first=submenu.querySelector('a');first&&first.focus();e.preventDefault()}
    if(e.key==='Escape'&&submenu){submenu.style.display='none';a.focus()}
  })});
  const form=document.querySelector('form.form-cadastro');const toast=document.getElementById('toast');const modal=document.getElementById('modal');const closeModal=document.getElementById('close-modal');
  if(form&&toast){form.addEventListener('submit',e=>{e.preventDefault();toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2500);modal&&modal.classList.add('open')})}
  closeModal&&closeModal.addEventListener('click',()=>modal.classList.remove('open'));
});
