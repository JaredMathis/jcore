import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { function_add_with_body_error } from './add/with/body/error.mjs';
import { file_open_vs_code } from '../file/open/vs/code.mjs';
import { object_property_get } from '../object/property/get.mjs';
export async function function_add(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let result = await function_add_with_body_error(function_name);
    let function_path = object_property_get(result, 'file_path');
    await file_open_vs_code(function_path);
    metadata([]);
}