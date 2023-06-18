import { refactor_variable_add } from '../../refactor/variable/add.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_variable_add(function_name, identifier) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let v = function_name_get(refactor_variable_add);
    await function_map_with_args(v, function_name, { identifier });
}