import { metadata } from '../../../metadata.mjs';
import { js_identifier_combine } from '../../../js/identifier/combine.mjs';
import { js_identifier_sub_is } from '../../../js/identifier/sub/is.mjs';
import { function_copy } from '../../copy.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_suffix_change(function_name_prefix, function_name_suffix_from, function_name_suffix_to) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is,
        js_identifier_sub_is
    ]);
    let function_name_to_copy = js_identifier_combine(function_name_prefix, function_name_suffix_from);
    let function_name_of_copy = js_identifier_combine(function_name_prefix, function_name_suffix_to);
    await function_copy(function_name_to_copy, function_name_of_copy);
    metadata([]);
}