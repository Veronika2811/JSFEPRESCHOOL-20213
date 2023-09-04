export const REGISTER_FIELDS = {
  login: {
    fields: [
      {
        title: 'E-mail or readers card',
        name: 'email',
        error: 'Field must not be empty',
      },
      {
        title: 'Password',
        name: 'password',
        error: 'Password must be at least 8 characters',
      },
    ],
    buttonText: 'Log In',
    aditionText: 'Don’t have an account?',
    aditionLink: 'Register',
  },
  register: {
    fields: [
      {
        title: 'First name',
        name: 'firstName',
        error: 'Field must not be empty',
      },
      {
        title: 'Last name',
        name: 'lastName',
        error: 'Field must not be empty',
      },
      {
        title: 'E-mail',
        name: 'email',
        error: 'Field must not be empty',
      },
      {
        title: 'Password',
        name: 'password',
        error: 'Password must be at least 8 characters',
      },
    ],
    buttonText: 'Sign Up',
    aditionText: 'Already have an account?',
    aditionLink: 'Login',
  },
};

export const USER_INFO = [
  {
    title: 'visits',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/></svg>',
  },
  {
    title: 'bonuses',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/></svg>',
  },
  {
    title: 'books',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><rect width="20" height="21" fill="#BB945F"/><rect x="2" width="1" height="19" fill="#826844"/><rect x="1" width="1" height="21" fill="white"/></svg>',
  },
];

export const RENTED_BOOKS = ['The Last Queen, Clive Irving', 'Dominicana, Angie Cruz'];

export const LIBRARY_CARD_FORM = [
  {
    title: 'Bank card number',
    name: ['card-number'],
  },
  {
    title: 'Expiration code',
    name: ['month', 'year'],
    width: '45px',
  },
  {
    title: 'CVC',
    name: ['cvc'],
    width: '45px',
  },
  {
    title: 'Cardholder name',
    name: ['cardholder'],
  },
  {
    title: 'Postal code',
    name: ['postal-code'],
  },
  {
    title: 'City / Town',
    name: ['city'],
  },
];