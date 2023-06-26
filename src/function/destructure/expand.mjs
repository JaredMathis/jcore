import { metadata } from '../../metadata.mjs';
import { refactor_destructure_expand } from '../../refactor/destructure/expand.mjs';
import { function_map_with_args } from '../map/with/args.mjs';
import { function_name_get } from '../name/get.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_destructure_expand(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let v = function_name_get(refactor_destructure_expand);
    let v_2 = {};
    await function_map_with_args(v, function_name, v_2);
    metadata([]);
}