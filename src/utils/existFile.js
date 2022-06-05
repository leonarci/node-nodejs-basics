import { access } from 'fs/promises';
import { constants } from 'fs';
import { fileURLToPath } from "url";
export async function existFile(filePath) {
  const __filename = filePath instanceof URL ? fileURLToPath(filePath) : filePath;
  return await access(__filename, constants.F_OK)
    .then(() => true)
    .catch(() => {
      return false;
    });
}
