import { js_identifier_is } from '../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_delete } from '../../delete.mjs';
import { function_exists } from '../../exists.mjs';
export async function function_delete_if_exists(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    if (await function_exists(function_name))
        await function_delete(function_name);
    metadata([]);
}