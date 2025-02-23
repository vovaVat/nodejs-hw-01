import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const fileData = await fs.readFile(PATH_DB, 'utf-8');
    const contactsList = fileData ? JSON.parse(fileData) : [];

    for (let i = 0; i < number; i++) {
      const generatedContact = createFakeContact();
      contactsList.push(generatedContact);
    }

    await writeContacts(contactsList);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
