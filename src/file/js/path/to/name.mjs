import { metadata } from '../../../../metadata.mjs';
import { list_single } from '../../../../list/single.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { file_js_path_all_to_name } from '../all/to/name.mjs';
export function file_js_path_to_name(file_js_path) {
    return list_single(file_js_path_all_to_name(list_single_item(file_js_path)));
    metadata([]);
}