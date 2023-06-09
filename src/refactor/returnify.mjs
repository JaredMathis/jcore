import { list_single_item } from '../list/single/item.mjs';
import { refactor_node_assign_and_replace } from './node/assign/and/replace.mjs';
import { metadata } from '../metadata.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_node_is_return_statement } from '../js/node/is/return/statement.mjs';
import { js_node_property_argument_get } from '../js/node/property/argument/get.mjs';
export function refactor_returnify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let lambda_children_get = function v(n) {
        let v_2 = js_node_property_argument_get(n);
        let v_3 = list_single_item(v_2);
        return v_3;
    };
    let lambda_node_is_type = js_node_is_return_statement;
    refactor_node_assign_and_replace(args, lambda_node_is_type, lambda_children_get);
    metadata([]);
}