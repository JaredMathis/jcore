import { js_function_declaration_to_metadata_args } from '../../../../js/function/declaration/to/metadata/args.mjs';
import { js_statement_metadata_args_get } from '../../../../js/statement/metadata/args/get.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { refactor_functions_metadata_missing_add } from '../missing/add.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { list_take } from '../../../../list/take.mjs';
import { js_statement_metadata_is } from '../../../../js/statement/metadata/is.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_length_is_0 } from '../../../../list/length/is/0.mjs';
import { js_function_delcaration_to_statements } from '../../../../js/function/delcaration/to/statements.mjs';
import { list_length } from '../../../../list/length.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { list_remove } from '../../../../list/remove.mjs';
export async function refactor_functions_metadata_extra_remove() {
    await refactor_functions_metadata_missing_add();
    await file_js_all_map_args_if_function(async function logic(function_declaration, args) {
        let statements = js_function_delcaration_to_statements(function_declaration);
        if (!list_length_is_0(statements)) {
            let last_metadata_args = js_function_declaration_to_metadata_args(statements);
            let remaining = list_take(statements, subtract_1(list_length(statements)));
            let removals = list_filter(remaining, js_statement_metadata_is);
            for (let r of removals) {
                let expression_args = js_statement_metadata_args_get(r);
                list_add_multiple(last_metadata_args, expression_args);
                list_remove(statements, r);
            }
        }
    });
    metadata([]);
}