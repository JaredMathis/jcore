import { js_statement_if_metadata } from '../../../../js/statement/if/metadata.mjs';
import { log } from '../../../../log.mjs';
import { git } from '../../../../git.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { metadata_arguments_assert_none } from '../../../../metadata/arguments/assert/none.mjs';
import { function_dependencies_names } from '../../../../function/dependencies/names.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { js_keyword_arguments } from '../../../../js/keyword/arguments.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { list_first } from '../../../../list/first.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { list_add_beginning } from '../../../../list/add/beginning.mjs';
import { js_parse_statement } from '../../../../js/parse/statement.mjs';
import { list_length } from '../../../../list/length.mjs';
import { list_map } from '../../../../list/map.mjs';
import { range } from '../../../../range.mjs';
import { tautology } from '../../../../tautology.mjs';
import { list_join } from '../../../../list/join.mjs';
import { refactor_import_fix } from '../../../import/fix.mjs';
import { js_function_declaration_to_name } from '../../../../js/function/declaration/to/name.mjs';
import { comment } from '../../../../comment.mjs';
import { list_contains } from '../../../../list/contains.mjs';
export async function refactor_functions_arguments_assert_add() {
    arguments_assert(arguments, []);
    let excludes = await function_dependencies_names(function_name_get(arguments_assert));
    comment(`Eventually this should be refactored maybe to read files and detect an attribute`);
    list_add_multiple(excludes, [
        function_name_get(metadata_arguments_assert_none),
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
            js_statement_if_metadata(statement_first, function_name_get(arguments_assert), function on_name_equal() {
                exists = true;
            });
        }
        console.log(exists);
        if (!exists) {
            let params = object_property_get(function_declaration, 'params');
            let params_length = list_length(params);
            let params_mapped = list_map(range(params_length), i => function_name_get(tautology));
            let params_joined = list_join(params_mapped, ', ');
            let params_code = `[${ params_joined }]`;
            let params2 = [
                js_keyword_arguments(),
                params_code
            ];
            let params_code2 = list_join(params2, ', ');
            let statement_new = js_parse_statement(`${ function_name_get(arguments_assert) }(${ params_code2 })`);
            list_add_beginning(statements, statement_new);
            await refactor_import_fix(args);
        }
    });
    metadata([]);
}