import { js_node_is } from '../../is.mjs';
import { js_node_type_if_statement } from '../../type/if/statement.mjs';
import { js_node_is_type } from '../type.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_is_if_statement(value) {
    arguments_assert(arguments, [js_node_is]);
    return js_node_is_type(value, js_node_type_if_statement());
}