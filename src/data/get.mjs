import { json_from } from './json_from.mjs';
import { path_exists_not } from './path_exists_not.mjs';
import { file_read } from './file_read.mjs';
export async function data_get() {
    const file_path = './data.json';
    if (await path_exists_not(file_path)) {
        
    }
    let json = await file_read(file_path);
    let data = json_from(json);
    return data;
}