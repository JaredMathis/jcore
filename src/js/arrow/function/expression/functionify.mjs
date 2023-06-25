import { js_function_declaration_named } from '../../../function/declaration/named.mjs';
import { js_function_declaration_asyncify } from '../../../function/declaration/asyncify.mjs';
import { js_node_property_async_get } from '../../../node/property/async/get.mjs';
import { js_node_property_body } from '../../../node/property/body.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_arrow_function_expression_body } from './body.mjs';
import { js_return_statement_argument_change } from '../../../return/statement/argument/change.mjs';
import { js_code_return_statement } from '../../../code/return/statement.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { js_node_is_arrow_function_expression } from '../../../node/is/arrow/function/expression.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_a } from '../../../../string/a.mjs';
import { js_parse_statement } from '../../../parse/statement.mjs';
import { js_function_declaration_to_statements } from '../../../function/declaration/to/statements.mjs';
import { list_add } from '../../../../list/add.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
import { js_node_property_params } from '../../../node/property/params.mjs';
import { js_node_is_block_statement } from '../../../node/is/block/statement.mjs';
export function js_arrow_function_expression_functionify(node, name) {
    arguments_assert(arguments, [
        js_node_is_arrow_function_expression,
        arguments_assert_todo
    ]);
    let is_async = js_node_property_async_get(node);
    let body = js_arrow_function_expression_body(node);
    let function_expression = js_function_declaration_named(name);
    if (is_async) {
        js_function_declaration_asyncify(function_expression);
    }
    let v = string_a();
    let return_statement_code = js_code_return_statement(v);
    let return_statement = js_parse_statement(return_statement_code);
    let v_5 = js_node_is_block_statement(body);
    if (v_5) {
        let v_2 = js_node_property_body();
        object_property_change(function_expression, v_2, body);
    } else {
        js_return_statement_argument_change(return_statement, body);
        let statements = js_function_declaration_to_statements(function_expression);
        list_add(statements, return_statement);
    }
    let v_3 = js_node_property_params();
    let args = object_property_get(node, v_3);
    let v_4 = js_node_property_params();
    object_property_change(function_expression, v_4, args);
    object_replace(node, function_expression);
}