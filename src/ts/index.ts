import UUID from 'uuid';

import { User } from './User';

const user = new User('testtest', 'names', 20);

const contentsElem = document.getElementById('contents')

if (!!contentsElem) {
    contentsElem.innerHTML = `${user.familyName} ${user.givenName}`
}

const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;

// saiban button click events
saibanButton.onclick = (e) => {
    uuidSpan.innerText = UUID.v4();
}