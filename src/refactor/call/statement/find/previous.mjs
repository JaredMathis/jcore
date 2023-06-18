import { js_node_call_expression_if_name_equal } from '../../../../js/node/call/expression/if/name/equal.mjs';
import { list_index_of } from '../../../../list/index/of.mjs';
import { js_unparse } from '../../../../js/unparse.mjs';
import { js_visit_call_statements } from '../../../../js/visit/call/statements.mjs';
import { log } from '../../../../log.mjs';
import { js_mapper_args_to_function_name } from '../../../../js/mapper/args/to/function/name.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { list_get } from '../../../../list/get.mjs';
import { error } from '../../../../error.mjs';
export function refactor_call_statement_find_previous(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name_find} = args;
    let function_name = js_mapper_args_to_function_name(args);
    js_visit_call_statements(args, (stack_reversed, node, expression, parent_list) => {
        js_node_call_expression_if_name_equal(expression, function_name_find, () => {
            log({function_name,function_name_find});
            let node_string = js_unparse(expression);
            log(node_string);
            let index = list_index_of(parent_list, node);
            let index_previous = subtract_1(index);
            let previous = list_get(parent_list, index_previous);
            log(js_unparse(previous));
            log('');
            error();
        });
    });
}