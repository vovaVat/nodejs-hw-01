import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (er) {
    console.log(er);
    return [];
  }
};

console.log(await getAllContacts());
