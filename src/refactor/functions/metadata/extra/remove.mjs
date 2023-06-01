import { js_mapper_args_to_metadata_args } from '../../../../js/mapper/args/to/metadata/args.mjs';
import { js_statement_metadata_args_get } from '../../../../js/statement/metadata/args/get.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { subtract_1 } from '../../../../subtract/1.mjs';
import { list_take } from '../../../../list/take.mjs';
import { js_statement_metadata_is } from '../../../../js/statement/metadata/is.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_length } from '../../../../list/length.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { list_remove } from '../../../../list/remove.mjs';
export async function refactor_functions_metadata_extra_remove() {
    await file_js_all_map_args_if_function(async function logic(args) {
        let {function_declaration} = args;
        let last_metadata_args = js_mapper_args_to_metadata_args(function_declaration);
        let remaining = list_take(statements, subtract_1(list_length(statements)));
        let removals = list_filter(remaining, js_statement_metadata_is);
        for (let r of removals) {
            let expression_args = js_statement_metadata_args_get(r);
            list_add_multiple(last_metadata_args, expression_args);
            list_remove(statements, r);
        }
    });
    metadata([]);
}