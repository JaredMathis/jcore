import { js_mapper_args_to_function_name } from '../../../js/mapper/args/to/function/name.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { refactor_unasyncify } from '../../unasyncify.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function refactor_unasyncify_if_needed(args) {
    arguments_assert(arguments, [defined_is]);
    let function_name = js_mapper_args_to_function_name(args);
    let result = await refactor_unasyncify(args);
    return result;
}