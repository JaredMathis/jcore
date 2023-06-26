import { and } from '../../../../../../and.mjs';
import { integer_value_0 } from '../../../../../../integer/value/0.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { list_find_first_index_starting_at } from '../../../../../../list/find/first/index/starting/at.mjs';
import { list_get } from '../../../../../../list/get.mjs';
import { assert } from '../../../../../../assert.mjs';
import { js_node_is_block_statement } from '../../../../../node/is/block/statement.mjs';
import { js_node_is_program } from '../../../../../node/is/program.mjs';
import { result_empty } from '../../../../../../result/empty.mjs';
import { result_unsuccess } from '../../../../../../result/unsuccess.mjs';
import { result_property_data_set } from '../../../../../../result/property/data/set.mjs';
import { list_first } from '../../../../../../list/first.mjs';
import { comment } from '../../../../../../comment.mjs';
import { null_is } from '../../../../../../null/is.mjs';
import { js_node_is } from '../../../../../node/is.mjs';
import { js_node_property_body_get } from '../../../../../node/property/body/get.mjs';
export function js_visit_stack_reversed_to_ancestor_list(stack_reversed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let stack_reversed_first = list_first(stack_reversed);
    comment(`This probably means the stack is not reversed; if not code needs changing`);
    assert(!js_node_is_program(stack_reversed_first));
    let result = result_empty();
    let index_starting_at = integer_value_0();
    let parent_list_index = list_find_first_index_starting_at(stack_reversed, function v(n) {
        if (!js_node_is(n)) {
            return false;
        }
        return js_node_is_block_statement(n);
    }, index_starting_at);
    if (null_is(parent_list_index)) {
        result_unsuccess(result);
        return result;
    }
    let parent_list_next = list_get(stack_reversed, parent_list_index);
    let v_14 = js_node_is_block_statement(parent_list_next);
    assert(v_14);
    let ancestor_list = js_node_property_body_get(parent_list_next);
    result_property_data_set(result, ancestor_list);
    return result;
}