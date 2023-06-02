import { js_property_name_params } from '../../../../../js/property/name/params.mjs';
import { arguments_assert_predicate_default } from '../../../../../arguments/assert/predicate/default.mjs';
import { list_contains } from '../../../../../list/contains.mjs';
import { js_function_declaration_to_name } from '../../../../../js/function/declaration/to/name.mjs';
import { comment } from '../../../../../comment.mjs';
import { list_add_beginning } from '../../../../../list/add/beginning.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_parse_statement } from '../../../../../js/parse/statement.mjs';
import { js_keyword_arguments } from '../../../../../js/keyword/arguments.mjs';
import { list_join } from '../../../../../list/join.mjs';
import { tautology } from '../../../../../tautology.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { range } from '../../../../../range.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { list_length } from '../../../../../list/length.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_function_delcaration_to_statements } from '../../../../../js/function/delcaration/to/statements.mjs';
export function refactor_arguments_assert_add_no_check(function_declaration, excludes) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    comment(`We want to skip dependencies of ${ function_name_get(arguments_assert) } or we will have recursion problems`);
    let function_name = js_function_declaration_to_name(function_declaration);
    if (list_contains(excludes, function_name)) {
        return;
    }
    let statements = js_function_delcaration_to_statements(function_declaration);
    let params = object_property_get(function_declaration, js_property_name_params());
    let params_length = list_length(params);
    let params_mapped = list_map(range(params_length), i => function_name_get(arguments_assert_predicate_default()));
    let params_joined = list_join(params_mapped, ', ');
    let params_code = `[${ params_joined }]`;
    let params2 = [
        js_keyword_arguments(),
        params_code
    ];
    let params_code2 = list_join(params2, ', ');
    let statement_new = js_parse_statement(`${ function_name_get(arguments_assert) }(${ params_code2 })`);
    list_add_beginning(statements, statement_new);
}