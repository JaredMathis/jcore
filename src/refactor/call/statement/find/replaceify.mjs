import { js_node_property_arguments_get } from '../../../../js/node/property/arguments/get.mjs';
import { list_replace } from '../../../../list/replace.mjs';
import { js_call_expression_name_change } from '../../../../js/call/expression/name/change.mjs';
import { js_function_declaration_to_params_names } from '../../../../js/function/declaration/to/params/names.mjs';
import { result_property_success_get } from '../../../../result/property/success/get.mjs';
import { list_take_without_last } from '../../../../list/take/without/last.mjs';
import { equal_by } from '../../../../equal/by.mjs';
import { js_node_property_argument_get } from '../../../../js/node/property/argument/get.mjs';
import { js_id_get } from '../../../../js/id/get.mjs';
import { js_declarations_single } from '../../../../js/declarations/single.mjs';
import { js_node_is_variable_declaration } from '../../../../js/node/is/variable/declaration.mjs';
import { js_call_statement_name } from '../../../../js/call/statement/name.mjs';
import { js_statements_refactorable } from '../../../../js/statements/refactorable.mjs';
import { null_not_is } from '../../../../null/not/is.mjs';
import { list_find_or_null } from '../../../../list/find/or/null.mjs';
import { list_remove } from '../../../../list/remove.mjs';
import { js_function_declaration_to_statement_arguments_assert } from '../../../../js/function/declaration/to/statement/arguments/assert.mjs';
import { js_node_property_body_to_block_statement_body_statements } from '../../../../js/node/property/body/to/block/statement/body/statements.mjs';
import { js_node_call_expression_if_name_equal } from '../../../../js/node/call/expression/if/name/equal.mjs';
import { list_index_of } from '../../../../list/index/of.mjs';
import { js_visit_call_statements } from '../../../../js/visit/call/statements.mjs';
import { js_mapper_args_to_function_name } from '../../../../js/mapper/args/to/function/name.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { list_get } from '../../../../list/get.mjs';
import { js_node_is_return_statement } from '../../../../js/node/is/return/statement.mjs';
import { list_last } from '../../../../list/last.mjs';
import { js_identifier_name_get } from '../../../../js/identifier/name/get.mjs';
import { assert } from '../../../../assert.mjs';
import { comment } from '../../../../comment.mjs';
import { log } from '../../../../log.mjs';
import { equal } from '../../../../equal.mjs';
import { list_map } from '../../../../list/map.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { result_property_data_get } from '../../../../result/property/data/get.mjs';
export async function refactor_call_statement_find_replaceify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name_find} = args;
    let function_name = js_mapper_args_to_function_name(args);
    if (equal(function_name, function_name_find)) {
        return;
    }
    let {function_declaration_find} = args;
    let statement_arguments_assert = await js_function_declaration_to_statement_arguments_assert(function_declaration_find);
    let function_name_find_statements = js_node_property_body_to_block_statement_body_statements(function_declaration_find);
    list_remove(function_name_find_statements, statement_arguments_assert);
    let return_statement = list_find_or_null(function_name_find_statements, js_node_is_return_statement);
    if (null_not_is(return_statement)) {
        list_remove(function_name_find_statements, return_statement);
    }
    let function_name_find_statements_last = list_last(function_name_find_statements);
    let function_name_find_statements_last_name = js_call_statement_name(function_name_find_statements_last);
    if (null_not_is(return_statement)) {
        if (js_node_is_variable_declaration(function_name_find_statements_last)) {
            let last_declaration = js_declarations_single(function_name_find_statements_last);
            let last_id = js_id_get(last_declaration);
            let argument = js_node_property_argument_get(return_statement);
            comment(`If this fails then the last non-return statement in ${ function_name_find } assigns a variable, but that variable isn't returned - it should be - or code needs to be changed`);
            assert(equal_by(js_identifier_name_get, last_id, argument));
        }
    }
    let function_find_inputs = js_function_declaration_to_params_names(function_declaration_find);
    js_visit_call_statements(args, (stack_reversed, node, expression, parent_list) => {
        js_node_call_expression_if_name_equal(expression, function_name_find_statements_last_name, () => {
            log(function_name);
            let index = list_index_of(parent_list, node);
            let index_previous = subtract_1(index);
            let previous = list_get(parent_list, index_previous);
            let statements = [
                previous,
                node
            ];
            let refactorable = js_statements_refactorable(statements, function_name_find_statements);
            if (!result_property_success_get(refactorable)) {
                return;
            }
            let refactorable_data = result_property_data_get(refactorable);
            let statements_to_remove = list_take_without_last(statements);
            for (let s of statements_to_remove) {
                list_remove(parent_list, s);
            }
            js_call_expression_name_change(expression, function_name_find);
            log({ expression });
            let args = js_node_property_arguments_get(expression);
            list_replace(args, list_map(args, a => {
                let name_before = js_identifier_name_get(a);
                let name_after = object_property_get(refactorable_data, name_before);
                let p_after = 
            }));
        });
    });
}