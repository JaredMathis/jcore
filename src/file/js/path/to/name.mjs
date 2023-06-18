import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_single } from '../../../../list/single.mjs';
import { list_single_item } from '../../../../list/single/item.mjs';
import { file_js_path_all_to_name } from '../all/to/name.mjs';
import { path_is } from '../../../../path/is.mjs';
export function file_js_path_to_name(file_js_path) {
    arguments_assert(arguments, [path_is]);
    let v_3 = list_single_item(file_js_path);
    let v = file_js_path_all_to_name(v_3);
    let v_2 = list_single(v);
    return v_2;
    metadata([]);
}