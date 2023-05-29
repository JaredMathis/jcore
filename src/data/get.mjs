import { file_read } from './file_read.mjs';
export async function data_get() {
    const file_path = './data.json';
    await file_read(file_path);
}