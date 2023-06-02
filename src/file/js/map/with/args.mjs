import { function_run } from '../../../../function/run.mjs';
import { file_js_map_args } from '../args.mjs';
export async function file_js_map_with_args(file_path, function_name_mapper) {
    await file_js_map_args(file_path, mapper);
    async function mapper(args) {
        await function_run(function_name_mapper, [args]);
    }
}