import { file_js_all_map_args } from '../../../../file/js/all/map/args.mjs';
import { js_export_single } from '../../../../js/export/single.mjs';
import { list_length_is_1 } from '../../../../list/length/is/1.mjs';
export async function refactor_functions_arguments_assert_add() {
    await file_js_all_map_args(function mapper(args) {
        let {parsed, file_path} = args;
        let exports = js_exports(parsed);
        if (!list_length_is_1(exports)) {

        }
    });
}