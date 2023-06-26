import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_node_is_type } from './type.mjs';
import { js_node_is } from '../is.mjs';
export function js_node_is_program(parsed) {
    arguments_assert(arguments, [js_node_is]);
    let v_2 = 'Program';
    let v = js_node_is_type(parsed, v_2);
    return v;
    metadata([]);
}