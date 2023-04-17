const buttonOpen = document.getElementById('button-edit');
const buttonClose = document.getElementById('close-button');
const buttonClose1 = document.getElementById('close-button1');
const popup = document.getElementById('popup');
const popup_newPlace = document.getElementById('popup__newPlace')
const inputName = document.getElementById('name-edit');
const inputWorkplace = document.getElementById('workplace-edit');
const saveButton = document.getElementById('save-button');
const profileName = document.getElementById('name');
const profileStatus = document.getElementById('workplace'); 
const form = document.getElementById('form');
const buttonCreate = document.getElementById('create-button');

const buttonAdd = document.querySelector('.button_type_add');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const trashButtons = document.querySelectorAll('.button_type_trash');

// Event Listeners

buttonOpen.addEventListener('click', openEditForm);

form.addEventListener('submit', profileEdit);   
 
buttonClose.addEventListener('click', closeEditForm);

buttonAdd.addEventListener('click', openAddForm);

buttonClose1.addEventListener('click', closeAddForm);

buttonCreate.addEventListener('click', addElement)

//Functions
function delElement(){
    const elements = document.querySelector('.elements');
    console.log(elements)
    for (let i = 0; i < trashButtons.length; i++) {
        trashButtons[i].addEventListener('click', function () {
        this.remove()
        });
    }
}
delElement()

function addElements (arr){
    const elements = document.querySelector('.elements');
    for (let i in arr){
        let obj = arr[i]
        let array = Object.values(obj)
        let name = array[0]
        let link = array[1]
        let article = document.createElement('article');
        article.className = "element";
        article.innerHTML = `<img src="${link}" class="element__mask-group" alt="${name}">
        <div class="element__descroption"><h2 class="element__name">${name}</h2><button class="button_type_like button" type="button"></button>
        </div>`
        elements.prepend(article);
        
    }
    addLikeButtons();
}

addElements(initialCards)

function addLikeButtons (){
    const likeButtons = document.querySelectorAll('.button_type_like')
    for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', function () {
    this.classList.toggle('active');
    });
    }
}    

function openAddForm(){
    popup_newPlace.classList.add('popup_opened');   
}

function closeAddForm(){
    popup_newPlace.classList.remove('popup_opened');
}

function openEditForm(){
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputWorkplace.value = profileStatus.textContent;
}

function closeEditForm(){
    popup.classList.remove('popup_opened');
}

function profileEdit(evt){
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputWorkplace.value;
    closeEditForm();
}

function addElement (){
    const elements = document.querySelector('.elements');
    const inputPlace = document.getElementById('newplace').value;
    const inputImg = document.getElementById('imglink').value;
    console.log(inputPlace, inputImg)
    let article = document.createElement('article');
    article.className = "element";
    article.innerHTML = `<img src="${inputImg}" class="element__mask-group" alt="${inputPlace}">
    <div class="element__descroption"><h2 class="element__name">${inputPlace}</h2><button class="button_type_like button" type="button"></button>
    </div>`
    elements.prepend(article);
    closeAddForm()
    addLikeButtons();
}