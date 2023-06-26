import { metadata } from '../../../../metadata.mjs';
import { js_node_is } from '../../is.mjs';
import { js_node_type_if_statement } from '../../type/if/statement.mjs';
import { js_node_is_type } from '../type.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_is_if_statement(value) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_type_if_statement();
    let v_2 = js_node_is_type(value, v);
    return v_2;
    metadata([]);
}