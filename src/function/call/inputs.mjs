import { js_identifier_is } from '../../js/identifier/is.mjs';
import { refactor_first_call_inputs } from '../../refactor/first/call/inputs.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_call_inputs(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_get(refactor_first_call_inputs);
    let v_2 = {};
    await function_map_with_args(v, function_name, v_2);
}