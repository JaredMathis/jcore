import { metadata } from '../../metadata.mjs';
import { js_identifier_sub_is } from '../../js/identifier/sub/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_extension_json } from '../extension/json.mjs';
import { string_is } from '../../string/is.mjs';
export function file_name_json(file_name) {
    arguments_assert(arguments, [string_is]);
    let v = file_extension_json();
    return `${ file_name }${ v }`;
    metadata([]);
}