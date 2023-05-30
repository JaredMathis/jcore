import { file_write } from '../../../file/write.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
import { error } from '../../../error.mjs';
export async function function_add_with_body(function_name) {
    let function_path = function_name_to_path(function_name);
    await file_write(function_path, `export function ${ function_name }() {
    ${ error.name }('todo: ${ function_name }');
}`);
    return function_path;
}