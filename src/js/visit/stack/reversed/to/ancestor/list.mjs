import { integer_value_0 } from '../../../../../../integer/value/0.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { add_1 } from '../../../../../../add/1.mjs';
import { list_is } from '../../../../../../list/is.mjs';
import { list_find_first_index_starting_at } from '../../../../../../list/find/first/index/starting/at.mjs';
import { list_get } from '../../../../../../list/get.mjs';
import { assert } from '../../../../../../assert.mjs';
import { js_node_is_block_statement } from '../../../../../node/is/block/statement.mjs';
import { js_node_is_variable_declaration } from '../../../../../node/is/variable/declaration.mjs';
import { js_node_is_program } from '../../../../../node/is/program.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { result_empty } from '../../../../../../result/empty.mjs';
import { result_unsuccess } from '../../../../../../result/unsuccess.mjs';
import { result_property_data_set } from '../../../../../../result/property/data/set.mjs';
import { list_first } from '../../../../../../list/first.mjs';
import { comment } from '../../../../../../comment.mjs';
export function js_visit_stack_reversed_to_ancestor_list(stack_reversed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let stack_reversed_first = list_first(stack_reversed);
    comment(`This probably means the stack is not reversed; if not code needs changing`);
    assert(!js_node_is_program(stack_reversed_first));
    let result = result_empty();
    let index_starting_at = integer_value_0();
    let list_find_first_after_result = list_find_first_start_at(stack_reversed, index_starting_at);
    let parent_list_next = object_property_get(list_find_first_after_result, 'next');
    let parent_list_index = object_property_get(list_find_first_after_result, 'index');
    if (js_node_is_program(parent_list_next)) {
        result_unsuccess(result);
        return result;
    }
    if (js_node_is_variable_declaration(parent_list_next)) {
        list_find_first_after_result = list_find_first_start_at(stack_reversed, parent_list_index);
        parent_list_next = object_property_get(list_find_first_after_result, 'next');
        parent_list_index = object_property_get(list_find_first_after_result, 'index');
    }
    let v_14 = js_node_is_block_statement(parent_list_next);
    assert(v_14);
    let ancestor_list = list_get(stack_reversed, parent_list_index);
    result_property_data_set(result, ancestor_list);
    return result;
    function list_find_first_start_at(stack_reversed, index_starting_at) {
        let index = list_find_first_index_starting_at(stack_reversed, list_is, index_starting_at);
        let index_next = add_1(index);
        let next = list_get(stack_reversed, index_next);
        return {
            next,
            index
        };
    }
}