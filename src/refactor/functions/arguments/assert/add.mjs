import { log } from '../../../../log.mjs';
import { js_export_function_single_or_null } from '../../../../js/export/function/single/or/null.mjs';
import { file_js_all_map_args } from '../../../../file/js/all/map/args.mjs';
import { error } from '../../../../error.mjs';
export async function refactor_functions_arguments_assert_add() {
    await file_js_all_map_args(function mapper(args) {
        let {parsed, file_path} = args;
        let export_single = js_export_function_single_or_null(parsed);
        if (export_single === null) {
            return;
        }
        console.log(export_single);
        error();
    });
}