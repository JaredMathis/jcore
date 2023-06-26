import { metadata } from '../../metadata.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { refactor_first_call_add } from '../../refactor/first/call/add.mjs';
import { function_name_get } from '../name/get.mjs';
import { function_map } from '../map.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_call_add(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_get(refactor_first_call_add);
    await function_map(v, function_name);
    metadata([]);
}