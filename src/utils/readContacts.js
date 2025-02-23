import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  const contactList = await fs.readFile(PATH_DB);
  return JSON.parse(contactList);
};
