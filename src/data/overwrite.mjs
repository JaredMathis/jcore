import { file_json_overwrite } from '../file/json/overwrite.mjs';
import { data_path } from './path.mjs';
export async function data_overwrite(data) {
    let file_path = data_path();
    await file_json_overwrite(data, file_path);
}