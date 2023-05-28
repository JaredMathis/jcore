import fs from 'fs';
import { directory_exists_ensure } from '../directory/exists/ensure.mjs';
import { file_path_split } from '../file/path/split.mjs';
import { path_join } from '../path/join.mjs';

export async function file_overwrite(file_path, contents) {
    let split = file_path_split(file_path);
    array_last_remove(split);
    let directory_path = path_join(split)
    await directory_exists_ensure(directory_path);
    await fs.promises.writeFile(file_path, contents);
}