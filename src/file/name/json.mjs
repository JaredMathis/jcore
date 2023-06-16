import { string_identifier_sub_is } from '../../string/identifier/sub/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { file_extension_json } from '../extension/json.mjs';
export function file_name_json(file_name) {
    arguments_assert(arguments, [string_identifier_sub_is]);
    return `${ file_name }${ file_extension_json() }`;
}