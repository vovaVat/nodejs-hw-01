import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contactsList = await readContacts();
    const generatedContact = createFakeContact();

    contactsList.push(generatedContact);

    await writeContacts(contactsList);
  } catch (err) {
    console.log(err);
  }
};

addOneContact();
