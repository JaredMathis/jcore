import { file_write } from '../../../file/write.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
import { error } from '../../../error.mjs';
export async function function_add_with_body(function_name, body) {
    let function_path = function_name_to_path(function_name);
    const code = `export function ${ function_name }() {
    ${ error.name }('todo: ${ function_name }');
}`;
    await file_write(function_path, code);
    return function_path;
}