import { js_identifier_rename } from '../../../js/identifier/rename.mjs';
import { file_js_all_path } from '../all/path.mjs';
import { file_js_map_args } from '../map/args.mjs';
export async function file_js_identifier_rename(file_path, identifier_name_old, identifier_name_new) {
    for (let file_path of await file_js_all_path()) {
        await file_js_map_args(file_path, args => js_identifier_rename(args, identifier_name_old, identifier_name_new));
    }
}