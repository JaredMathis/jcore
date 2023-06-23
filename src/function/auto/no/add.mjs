import { function_auto_no_add_unasyncify } from './add/unasyncify.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_unasyncify_generic } from '../../unasyncify/generic.mjs';
export async function function_auto_no_add(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    await function_auto_no_add_unasyncify(function_name);
    const only_if_needed = true;
    await function_unasyncify_generic(function_name, only_if_needed);
    metadata([]);
}