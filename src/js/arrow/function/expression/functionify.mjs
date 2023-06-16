import { js_node_property_body } from '../../../node/property/body.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_arrow_function_expression_body } from './body.mjs';
import { js_return_statement_argument_change } from '../../../return/statement/argument/change.mjs';
import { js_code_return_statement } from '../../../code/return/statement.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { js_brace_left_right } from '../../../brace/left/right.mjs';
import { js_code_parenthesis_surround } from '../../../code/parenthesis/surround.mjs';
import { js_keyword_function } from '../../../keyword/function.mjs';
import { js_node_is_arrow_function_expression } from '../../../node/is/arrow/function/expression.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_parse_expression } from '../../../parse/expression.mjs';
import { string_a } from '../../../../string/a.mjs';
import { js_parse_statement } from '../../../parse/statement.mjs';
import { assert } from '../../../../assert.mjs';
import { js_node_is_call_expression } from '../../../node/is/call/expression.mjs';
import { comment } from '../../../../comment.mjs';
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
    let body = js_arrow_function_expression_body(node);
    let function_code = `${ js_keyword_function() } ${ name }${ js_code_parenthesis_surround(``) }${ js_brace_left_right() }`;
    let function_expression = js_parse_expression(function_code);
    let return_statement_code = js_code_return_statement(string_a());
    let return_statement = js_parse_statement(return_statement_code);
    if (js_node_is_block_statement(body)) {
        object_property_change(function_expression, js_node_property_body(), body);
    } else {
        comment(`If this fails, code needs to handle`);
        assert(js_node_is_call_expression(body));
        js_return_statement_argument_change(return_statement, body);
        let statements = js_function_declaration_to_statements(function_expression);
        list_add(statements, return_statement);
    }
    let args = object_property_get(node, js_node_property_params());
    object_property_change(function_expression, js_node_property_params(), args);
    object_replace(node, function_expression);
}