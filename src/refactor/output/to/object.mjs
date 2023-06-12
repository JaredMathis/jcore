import { defined_is } from '../../../defined/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_output_to_object(args) {
    arguments_assert(arguments, [defined_is]);
    let {parsed, function_declaration} = args;
}