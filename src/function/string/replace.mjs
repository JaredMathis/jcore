import { refactor_string_replace } from '../../refactor/string/replace.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export async function function_string_replace(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_map_with_args(function_name_get(refactor_string_replace), function_name, {});
}