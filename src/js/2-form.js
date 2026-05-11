const formElem = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

formElem.addEventListener('input', onFormInput);
formElem.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';

  evt.currentTarget.reset();
}

function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (!savedData) {
    return;
  }

  const parsedData = JSON.parse(savedData);

  Object.assign(formData, parsedData);

  formElem.elements.email.value = parsedData.email;
  formElem.elements.message.value = parsedData.message;
}
