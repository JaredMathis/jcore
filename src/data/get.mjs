import { file_read } from './file_read.mjs';
export async function data_get() {
    const file_path = './data.json';
    let json = await file_read(file_path);
    let data = json_from(json);
}