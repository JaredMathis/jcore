import { js_identifier_rename } from '../../../../js/identifier/rename.mjs';
import { file_js_all_map_args } from '../map/args.mjs';
export async function file_js_all_identifier_rename(identifier_name_old, identifier_name_new) {
    await file_js_all_map_args(function mapper(args) {
        js_identifier_rename(args, identifier_name_old, identifier_name_new);
    });
}