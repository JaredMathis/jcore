import { metadata } from '../../metadata.mjs';
import { function_delete } from '../delete.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { function_wrap } from '../wrap.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_wrap_replace(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    await function_delete(function_name_to_add);
    let result = await function_wrap(function_name_to_wrap, function_name_to_add);
    return result;
    metadata([]);
}