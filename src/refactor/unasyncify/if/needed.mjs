import { function_naming_suffix_asynk } from '../../../function/naming/suffix/asynk.mjs';
import { js_mapper_args_to_function_name } from '../../../js/mapper/args/to/function/name.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { refactor_unasyncify } from '../../unasyncify.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_ends_with } from '../../../string/ends/with.mjs';
export async function refactor_unasyncify_if_needed(args) {
    arguments_assert(arguments, [defined_is]);
    let function_name = js_mapper_args_to_function_name(args);
    let ending = function_naming_suffix_asynk();
    if (string_ends_with(function_name, ending)) {
        return await refactor_unasyncify(args);
    }
}