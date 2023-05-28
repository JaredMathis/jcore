import { file_write } from '../file/write.mjs';
import { function_name_to_path } from './name/to/path.mjs';
import { file_open_vs_code } from '../file/open/vs/code.mjs';
export async function function_add(function_name) {
    let function_path = function_name_to_path(function_name);
    await file_write(function_path, `export function ${ function_name }() {
    
}`);
    await file_open_vs_code(function_path);
}