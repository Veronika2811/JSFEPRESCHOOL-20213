const validateFormCard = (userInfo) => {
  // const {firstName, lastName, cardNumber } = userInfo;
  // const readersFormError = document.querySelector('form__field-error');
  // const readersName = document.querySelector('[name="readers-name"]');// .value;
  // const readersCardNumber = document.querySelector('[name="readers-card"]'); // .value.replaceAll(' ', '');
  // const arr = [];

  // if (!readersName.value || readersName.value.toLowerCase() !== `${firstName} ${lastName}`.toLowerCase()) {
  //   console.log('no valid')
  //   readersName.classList.add('validate-input');
  //   // console.log(readersName)
  //   // console.log(readersName.nextSibling.nextSibling)
  //   // readersName.nextSibling.nextSibling.textContent = 'Field must not be empty';
  //   readersName.nextSibling.nextSibling.style.display = 'block';
  // } else {
  //   console.log('valid')
  //   readersName.classList.remove('validate-input');
  //   readersName.nextSibling.nextSibling.style.display = 'none';
  //   arr.push(readersName)
  // }
  // // else if(readersName !== `${firstName} ${lastName}`) {
  // //   readersName.classList.add('validate-input');
  // //   readersName.nextSibling.nextSibling.textContent = 'Enter a valid first and last name';
  // //   readersName.nextSibling.nextSibling.style.display = 'block';
  // // } else if (readersName !== `${firstName} ${lastName}`)

  // // console.log(!readersCardNumber.value)
  // // console.log(cardNumber)
  // // console.log(readersCardNumber.value)
  // if (!readersCardNumber.value || readersCardNumber.value.replaceAll(' ', '') !== cardNumber) {
  //   readersCardNumber.classList.add('validate-input');
  //   // console.log(readersName)
  //   // console.log(readersName.nextSibling.nextSibling)
  //   // readersName.nextSibling.nextSibling.textContent = 'Field must not be empty';
  //   readersCardNumber.nextSibling.nextSibling.style.display = 'block';
  // } else {
  //   readersCardNumber.classList.remove('validate-input');
  //   readersCardNumber.nextSibling.nextSibling.style.display = 'none';
  //   arr.push(readersCardNumber)
  // }

  // return [readersName, readersCardNumber].length === arr.length;
}

const userCardVerification = () => {
  
  // const formButton = document.querySelector('.form__button');
  // const userInfo = JSON.parse(localStorage.getItem('user'));
  // const userAuth = localStorage.getItem('user-auth')
  // const readersName = document.querySelector('[name="readers-name"]');// .value;
  // const readersCardNumber = document.querySelector('[name="readers-card"]'); // .value.replaceAll(' ', '');
  // const userI = document.querySelector('.library-card__user-info');
  
  // if(formButton) {
    // formButton.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   const userAuth = localStorage.getItem('user-auth')
      
    //   // const {firstName, lastName, cardNumber } = JSON.parse(localStorage.getItem('user'));
  
    //   console.log(!userAuth)
    //   if (!userAuth) {
    //     const validate = validateFormCard(userInfo);

    //     if (validate) {
    //       // const userI = document.querySelector('.library-card__user-info');
    //       formButton.style.display = 'none';
    //       userI.style.display = 'flex';
    //       setTimeout(() => {
    //         readersName.value = '';
    //         readersCardNumber.value = '';
    //         formButton.style.display = 'block';
    //         userI.style.display = 'none';
    //       }, 10000);
    //     }
    //     // const readersName = document.querySelector('[name="readers-name"]').value;
    //     // const readersCardNumber = document.querySelector('[name="readers-card"]').value.replaceAll(' ', '');
    //     // console.log(readersCardNumber)
    //     // console.log(readersName)
  
    //     // if((readersName === `${firstName} ${lastName}`) && readersCardNumber === cardNumber) {
    //     //   setTimeout(() => {
  
    //     //   }, 10000);
    //     // } else {
    //     //   console.log('errror')
    //     // }
    //   }
    //   // if (userInfo && userAuth) {
    //   //   const readersName = document.querySelector('[name="readers-name"]');// .value;
    //   //   const readersCardNumber = document.querySelector('[name="readers-card"]'); // .value.replaceAll(' ', '');

    //   //   const {firstName, lastName, cardNumber } = userInfo;

    //   //   readersName.value = `${firstName} ${lastName}`
    //   //   readersCardNumber.value = cardNumber;
    //   // }
    // })

    // if (userInfo && userAuth) {

    //   const {firstName, lastName, cardNumber } = userInfo;

    //   readersName.value = `${firstName} ${lastName}`
    //   readersCardNumber.value = cardNumber;
    //   readersName.classList.remove('validate-input');
    //   readersName.nextSibling.nextSibling.style.display = 'none';
    //   readersCardNumber.classList.remove('validate-input');
    //   readersCardNumber.nextSibling.nextSibling.style.display = 'none';
    //   formButton.style.display = 'none';
    //   userI.style.display = 'flex';
    // } else {
    //   readersName.value = '';
    //   readersCardNumber.value = '';
    //   formButton.style.display = 'block';
    //   userI.style.display = 'none';
    // }
  // }

}

export default userCardVerification;
