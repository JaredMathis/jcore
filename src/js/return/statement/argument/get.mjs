import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_return_statement } from '../../../node/is/return/statement.mjs';
import { js_node_property_argument_get } from '../../../node/property/argument/get.mjs';
export function js_return_statement_argument_get(object) {
    arguments_assert(arguments, [js_node_is_return_statement]);
    let arg = js_node_property_argument_get(object);
    return arg;
}