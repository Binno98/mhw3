function bikeImageOpen(index)
{
  return function(){
    const new_image = document.createElement('img');
    new_image.src = BIKES_PHOTO_LIST[index];
    document.body.classList.add('no-scroll');
    new_image.removeEventListener('click', bikeImageOpen);
    modalView.style.top = window.scroll + 'px';
    modalView.appendChild(new_image);
    modalView.classList.remove('hidden');
  }
}

function onModalClick() {
  document.body.classList.remove('no-scroll');
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}



const items = document.querySelectorAll('.item-row');
const modalView = document.querySelector('#modal-view');


for(let i = 0; i < items.length; i++){
  items[i].addEventListener('click', bikeImageOpen(i));
}

modalView.addEventListener('click', onModalClick);




