import { js_export_function_single_or_null } from '../../../../../../js/export/function/single/or/null.mjs';
import { file_js_all_map_args } from '../../args.mjs';
export async function file_js_all_map_args_if_function(logic) {
    await file_js_all_map_args(async function mapper(args) {
        let {parsed, file_path} = args;
        let fd = js_export_function_single_or_null(parsed);
        if (fd === null) {
            return;
        }
        await logic(fd, args);
    });
}