import { js_code_join_comma } from '../../../../../js/code/join/comma.mjs';
import { js_code_call_expression_with_args } from '../../../../../js/code/call/expression/with/args.mjs';
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
import { function_name_get } from '../../../../../function/name/get.mjs';
import { range } from '../../../../../range.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { list_length } from '../../../../../list/length.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_function_declaration_to_statements } from '../../../../../js/function/declaration/to/statements.mjs';
export function refactor_arguments_assert_add_no_check(function_declaration, excludes) {
    arguments_assert(arguments, [
        js_node_is_function_declaration,
        list_is
    ]);
    comment(`We want to skip dependencies of ${ function_name_get(arguments_assert) } or we will have recursion problems`);
    let function_name = js_function_declaration_to_name(function_declaration);
    let v_6 = list_contains(excludes, function_name);
    if (v_6) {
        return;
    }
    let statements = js_function_declaration_to_statements(function_declaration);
    let v = js_node_property_params();
    let params = object_property_get(function_declaration, v);
    let params_length = list_length(params);
    let v_2 = range(params_length);
    let params_mapped = list_map(v_2, function v_3(i) {
        let v_4 = arguments_assert_predicate_default();
        let v_5 = function_name_get(v_4);
        return v_5;
    });
    let params_joined = js_code_join_comma(params_mapped);
    let params_code = `${ `[` }${ params_joined }${ `]` }`;
    let params2 = [
        js_keyword_arguments(),
        params_code
    ];
    const call_expression_function_name = function_name_get(arguments_assert);
    const statment_code = js_code_call_expression_with_args(call_expression_function_name, params2);
    let statement_new = js_parse_statement(statment_code);
    list_add_beginning(statements, statement_new);
    metadata([]);
}