import { refactor_arguments_assert_add_no_check } from '../../../arguments/assert/add/no/check.mjs';
import { js_node_call_expression_statement_if_name_equal } from '../../../../js/node/call/expression/statement/if/name/equal.mjs';
import { git } from '../../../../git.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../metadata/arguments/assert/extra/allow.mjs';
import { function_dependencies_names } from '../../../../function/dependencies/names.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { list_first } from '../../../../list/first.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { tautology } from '../../../../tautology.mjs';
import { refactor_import_fix } from '../../../import/fix.mjs';
import { js_function_declaration_to_name } from '../../../../js/function/declaration/to/name.mjs';
import { comment } from '../../../../comment.mjs';
import { list_contains } from '../../../../list/contains.mjs';
export async function refactor_functions_arguments_assert_add() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names(function_name_get(arguments_assert));
    comment(`Eventually this should be refactored maybe to read files and detect an attribute`);
    list_add_multiple(excludes, [
        function_name_get(metadata_arguments_assert_extra_allow),
        function_name_get(tautology),
        function_name_get(git)
    ]);
    await file_js_all_map_args_if_function(async function logic(args) {
        let {function_declaration} = args;
        comment(`We want to skip dependencies of ${ function_name_get(arguments_assert) } or we will have recursion problems`);
        let function_name = js_function_declaration_to_name(function_declaration);
        if (list_contains(excludes, function_name)) {
            return;
        }
        let exists = false;
        let statements = js_function_delcaration_to_statements(function_declaration);
        if (!list_length_is_0(statements)) {
            let statement_first = list_first(statements);
            js_node_call_expression_statement_if_name_equal(statement_first, function_name_get(arguments_assert), function on_name_equal() {
                exists = true;
            });
        }
        if (!exists) {
            refactor_arguments_assert_add_no_check(function_declaration);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}