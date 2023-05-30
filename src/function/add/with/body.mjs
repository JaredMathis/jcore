import { js_export_function_single } from '../../../js/export/function/single.mjs';
import { js_unparse } from '../../../js/unparse.mjs';
import { file_write } from '../../../file/write.mjs';
import { function_name_to_path } from '../../name/to/path.mjs';
import { error } from '../../../error.mjs';
import { js_parse } from '../../../js/parse.mjs';
export async function function_add_with_body(function_name, body) {
    let function_path = function_name_to_path(function_name);
    const code = `export function ${ function_name }() {
    ${ error.name }('todo: ${ function_name }');
}`;
    let parsed = js_parse(code);
    let single = js_export_function_single(parsed);
    let unparsed = js_unparse(parsed);
    await file_write(function_path, unparsed);
    return function_path;
}