import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
import { list_adder } from '../../../../../list/adder.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
export async function function_name_to_node_type_first(function_name, node_type_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    let parsed = function_parse(function_name);
    list_adder(la => {
        js_nodes_each(parsed, n => js_node_is_type(n, node_type_name), n => la(n));
    });
    return result;
}