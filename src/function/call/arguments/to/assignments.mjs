import { js_identifier_is } from '../../../../js/identifier/is.mjs';
import { refactor_call_arguments_to_assignments } from '../../../../refactor/call/arguments/to/assignments.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_map_with_args } from '../../../map/with/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_call_arguments_to_assignments(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_get(refactor_call_arguments_to_assignments);
    await function_map_with_args(v, function_name, {});
}