import { string_identifier_is } from '../../string/identifier/is.mjs';
import { refactor_call_name } from '../../refactor/call/name.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map } from '../map.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_call_name(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_map(function_name_get(refactor_call_name), function_name);
}