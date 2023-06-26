import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { string_combine } from '../../combine.mjs';
export function string_function_name_prefix(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_separator();
    let v_2 = string_combine(function_name, v);
    return v_2;
    metadata([]);
}