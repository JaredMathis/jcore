import { refactor_variable_set } from '../../refactor/variable/set.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { string_is } from '../../string/is.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_variable_set(function_name, value) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is
    ]);
    await function_map_with_args(function_name_get(refactor_variable_set), function_name, { value });
}