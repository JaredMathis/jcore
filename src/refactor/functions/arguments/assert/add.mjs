import { js_export_function_single } from '../../../../js/export/function/single.mjs';
import { file_js_all_map_args } from '../../../../file/js/all/map/args.mjs';
export async function refactor_functions_arguments_assert_add() {
    await file_js_all_map_args(function mapper(args) {
        let {parsed, file_path} = args;
        js_export_function_single;
    });
}