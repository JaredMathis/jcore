import { function_wrap_generic } from './wrap/generic.mjs';
import { noop } from '../noop.mjs';
import { js_identifier_is } from '../js/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_is
    ]);
    await function_wrap_generic(function_name_to_wrap, function_name_to_add, noop);
}