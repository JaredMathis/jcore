import { string_identifier_is } from '../../../../string/identifier/is.mjs';
import { refactor_input_swap_first_to } from '../../../../refactor/input/swap/first/to.mjs';
import { function_name_get } from '../../../name/get.mjs';
import { function_map_with_args } from '../../../map/with/args.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_input_swap_first_to(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_map_with_args(function_name_get(refactor_input_swap_first_to), function_name, {});
}