import { list_take_without_last } from '../../../../list/take/without/last.mjs';
import { error } from '../../../../error.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_mapper_args_to_metadata_args } from '../../../../js/mapper/args/to/metadata/args.mjs';
import { js_statement_metadata_args_get } from '../../../../js/statement/metadata/args/get.mjs';
import { list_add_multiple } from '../../../../list/add/multiple.mjs';
import { js_statement_metadata_is } from '../../../../js/statement/metadata/is.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { list_remove } from '../../../../list/remove.mjs';
export async function refactor_functions_metadata_extra_remove() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        let last_metadata_args = js_mapper_args_to_metadata_args(args);
        let statements = error(`not sure what happened to statements - putting this here for now`);
        let remaining = list_take_without_last(statements);
        let removals = list_filter(remaining, js_statement_metadata_is);
        for (let r of removals) {
            let expression_args = js_statement_metadata_args_get(r);
            list_add_multiple(last_metadata_args, expression_args);
            list_remove(statements, r);
        }
    });
    metadata([]);
}