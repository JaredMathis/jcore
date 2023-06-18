import { string_identifier_is } from '../../string/identifier/is.mjs';
import { refactor_call_inputs } from '../../refactor/call/inputs.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_call_inputs(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let v = function_name_get(refactor_call_inputs);
    await function_map_with_args(v, function_name, {});
}