import { function_wrap_generic } from './wrap/generic.mjs';
import { noop } from '../noop.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let map = noop;
    await function_wrap_generic(function_name_to_wrap, function_name_to_add, map);
}