import { file_overwrite } from '../overwrite.mjs';
import { js_unparse } from '../../js/unparse.mjs';
import { function_run } from '../../function/run.mjs';
import { file_js_path_to_args } from './path/to/args.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export async function file_js_map(function_name_mapper, file_path) {
    let args = await file_js_path_to_args(file_path);
    await function_run(function_name_mapper, [args]);
    let parsed = object_property_get(args, 'parsed');
    let unparsed = js_unparse(parsed);
    await file_overwrite(file_path, unparsed);
}