import { metadata } from '../../../metadata.mjs';
import { function_rename_single } from '../single.mjs';
import { list_join } from '../../../list/join.mjs';
import { function_name_separator } from '../../name/separator.mjs';
export async function function_rename_suffix_generic(function_name_old_parts, function_name_old_to_new) {
    let v = function_name_separator();
    let function_name_old = list_join(function_name_old_parts, v);
    let function_name_new = function_name_old_to_new(function_name_old);
    await function_rename_single(function_name_old, function_name_new);
    metadata([]);
}