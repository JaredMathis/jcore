import { defined_is } from '../../../defined/is.mjs';
import { refactor_unasyncify } from '../../unasyncify.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_unasyncify_if_needed(args) {
    arguments_assert(arguments, [defined_is]);
    let result = await refactor_unasyncify(args);
    return result;
}