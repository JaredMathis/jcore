import { refactor_input_add } from '../../refactor/input/add.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export async function function_input_add(function_name, input_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    await function_map_with_args(function_name_get(refactor_input_add), function_name, { input_name });
}