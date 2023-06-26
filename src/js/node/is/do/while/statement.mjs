import { defined_is } from '../../../../../defined/is.mjs';
import { js_node_type_do_while_statement } from '../../../type/do/while/statement.mjs';
import { js_node_is_type } from '../../type.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_node_is_do_while_statement(value) {
    arguments_assert(arguments, [defined_is]);
    return js_node_is_type(value, js_node_type_do_while_statement());
}