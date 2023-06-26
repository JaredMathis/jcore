import { js_identifier_sub_is } from '../../js/identifier/sub/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_extension_json } from '../extension/json.mjs';
export function file_name_json(file_name) {
    arguments_assert(arguments, [js_identifier_sub_is]);
    let v = file_extension_json();
    return `${ file_name }${ v }`;
}