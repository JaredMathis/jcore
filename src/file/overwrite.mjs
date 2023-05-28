import fs from 'fs';
import { directory_exists_ensure } from '../directory/exists/ensure.mjs';
import { path_parent } from '../path/parent.mjs';

export async function file_overwrite(file_path, contents) {
    let directory_path = path_parent(file_path);
    await directory_exists_ensure(directory_path);
    await fs.promises.writeFile(file_path, contents);
}

