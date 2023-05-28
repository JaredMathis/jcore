import fs from 'fs';
import { path_parent } from '../path/parent.mjs';
import { directory_exists_ensure } from './exists/ensure.mjs';
export async function directory_add(directory_path) {
    let parent = path_parent(directory_path);
    await directory_exists_ensure(parent);
    await fs.promises.mkdir(directory_path);
}