import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { add_1 } from '../../../../../add/1.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { list_find_first_index_starting_at } from '../../../../../list/find/first/index/starting/at.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { assert } from '../../../../../assert.mjs';
import { js_node_is_block_statement } from '../../../../node/is/block/statement.mjs';
import { js_node_is_variable_declaration } from '../../../../node/is/variable/declaration.mjs';
import { js_node_is_program } from '../../../../node/is/program.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { list_reversed_get } from '../../../../../list/reversed/get.mjs';
export function js_visit_stack_to_ancestor_list(refactor_stack, lambda) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let stack_reversed = list_reversed_get(refactor_stack);
    let index_starting_at = 0;
    let list_find_first_after_result = list_find_first_start_at(stack_reversed, index_starting_at);
    let parent_list_next = object_property_get(list_find_first_after_result, 'next');
    let parent_list_index = object_property_get(list_find_first_after_result, 'index');
    if (js_node_is_program(parent_list_next)) {
        return;
    } else {
        if (js_node_is_variable_declaration(parent_list_next)) {
            list_find_first_after_result = list_find_first_start_at(stack_reversed, parent_list_index);
            parent_list_next = object_property_get(list_find_first_after_result, 'next');
            parent_list_index = object_property_get(list_find_first_after_result, 'index');
        }
        let v_14 = js_node_is_block_statement(parent_list_next);
        assert(v_14);
        let ancestor_list = list_get(stack_reversed, parent_list_index);
        lambda(ancestor_list);
    }
    function list_find_first_start_at(stack_reversed, index_starting_at) {
        let index = list_find_first_index_starting_at(stack_reversed, list_is, index_starting_at);
        let index_next = add_1(index);
        let next = list_get(stack_reversed, index_next);
        return {
            next,
            index
        };
    }
    return stack_reversed;
}