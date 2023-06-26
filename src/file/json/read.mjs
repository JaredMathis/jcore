import { metadata } from '../../metadata.mjs';
import { json_from } from '../../json/from.mjs';
import { file_read } from '../read.mjs';
export async function file_json_read(file_path) {
    let json = await file_read(file_path);
    let result = json_from(json);
    return result;
    metadata([]);
}