import { list_is } from '../../../../../list/is.mjs';
import { js_node_is_function_declaration } from '../../../../../js/node/is/function/declaration.mjs';
import { js_node_property_params } from '../../../../../js/node/property/params.mjs';
import { arguments_assert_predicate_default } from '../../../../../arguments/assert/predicate/default.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { js_function_declaration_to_name } from '../../../../../js/function/declaration/to/name.mjs';
import { comment } from '../../../../../comment.mjs';
import { list_add_beginning } from '../../../../../list/add/beginning.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_parse_statement } from '../../../../../js/parse/statement.mjs';
import { js_keyword_arguments } from '../../../../../js/keyword/arguments.mjs';
import { list_join } from '../../../../../list/join.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { range } from '../../../../../range.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { list_length } from '../../../../../list/length.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_function_delcaration_to_statements } from '../../../../../js/function/delcaration/to/statements.mjs';
import { js_code_call_expression_with_args } from '../../../../../js/code/call/expression/with/args.mjs';
export function refactor_arguments_assert_add_no_check(function_declaration, excludes) {
    arguments_assert(arguments, [
        js_node_is_function_declaration,
        list_is
    ]);
    comment(`We want to skip dependencies of ${ function_name_get(arguments_assert) } or we will have recursion problems`);
    let function_name = js_function_declaration_to_name(function_declaration);
    if (list_contains(excludes, function_name)) {
        return;
    }
    let statements = js_function_delcaration_to_statements(function_declaration);
    let params = object_property_get(function_declaration, js_node_property_params());
    let params_length = list_length(params);
    let params_mapped = list_map(range(params_length), i => function_name_get(arguments_assert_predicate_default()));
    let params_joined = list_join(params_mapped, ', ');
    let params_code = `[${ params_joined }]`;
    let params2 = [
        js_keyword_arguments(),
        params_code
    ];
    const call_expression_function_name = function_name_get(arguments_assert);
    let params_code2 = list_join(params2, ', ');
    const statment_code = js_code_call_expression_with_args(call_expression_function_name, params_code2);
    let statement_new = js_parse_statement(statment_code);
    list_add_beginning(statements, statement_new);
}