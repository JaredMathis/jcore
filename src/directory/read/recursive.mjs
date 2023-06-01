import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import fs from 'fs'
export async function directory_read_recursive(dir, file_list) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    const files = await fs.promises.readdir(dir);
    for (let file of files) {
        const file_path = path.join(dir, file);
        const stat = await fs.promises.stat(file_path);
        if (stat.isDirectory()) {
            file_list = await directory_read_recursive(file_path, file_list);
        } else {
            file_list.push(file_path);
        }
    }
    return file_list;
}