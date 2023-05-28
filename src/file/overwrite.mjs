import fs from 'fs';
import { directory_exists_ensure } from '../directory/exists/ensure.mjs';

export async function file_overwrite(file_path, contents) {
    
    await directory_exists_ensure(directory_path);
    await fs.promises.writeFile(file_path, contents);
}