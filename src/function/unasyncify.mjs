import { function_unasyncify_generic } from './unasyncify/generic.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_naming_suffix_asynk } from './naming/suffix/asynk.mjs';
import { metadata } from '../metadata.mjs';
export async function function_unasyncify(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let ending = function_naming_suffix_asynk();
    await function_unasyncify_generic(function_name, ending);
    metadata([]);
}