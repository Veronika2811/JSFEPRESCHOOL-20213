const loadUserIcon = (data) => {
  const userInfo = data || JSON.parse(localStorage.getItem('user'));

  const userIcon = document.querySelector('.user_icon');
  userIcon.innerHTML = '';

  if (userInfo) {
    const {firstName, lastName} = userInfo;

    userIcon.innerHTML = `<p class="user-icon__text">
      ${firstName.slice(0, 1).toUpperCase()}${lastName
      .slice(0, 1)
      .toUpperCase()}
      </p>`;
  } else {
    userIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.00003 9.44442C10.5774 9.44442 12.6667 7.35508 12.6667 4.77775C12.6667 2.20042 10.5774 0.111084 8.00003 0.111084C5.4227 0.111084 3.33337 2.20042 3.33337 4.77775C3.33337 7.35508 5.4227 9.44442 8.00003 9.44442ZM13.4997 13.278C14.9583 14.7367 15.7778 16.715 15.7778 18.7778H8.00001L0.222229 18.7778C0.222231 16.715 1.04167 14.7367 2.50029 13.278C3.9589 11.8194 5.93721 11 8.00001 11C10.0628 11 12.0411 11.8194 13.4997 13.278Z" fill="black"/></svg>';
  }
};

export default loadUserIcon;
