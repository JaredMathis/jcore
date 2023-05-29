import { directory_exists } from '../directory/exists.mjs';
import { file_read } from './file_read.mjs';
export async function data_get() {
    const file_path = './data.json';
    if (await directory_exists(file_path)) {
        
    }
    let json = await file_read(file_path);
    let data = json_from(json);
    return data;
}