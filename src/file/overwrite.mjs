import { metadata } from '../metadata.mjs';
import fs from 'fs';
import { path_parent_exists_ensure } from '../path/parent/exists/ensure.mjs';
export async function file_overwrite(file_path, contents) {
    await path_parent_exists_ensure(file_path);
    await fs.promises.writeFile(file_path, contents);
    metadata([]);
}