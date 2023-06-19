import { list_remove_last_verify } from '../verify.mjs';
import { list_reversed_get } from '../../../reversed/get.mjs';
export function list_remove_last_verify_multiple(function_name_suffix_parts, function_name_old_parts) {
    for (let part of list_reversed_get(function_name_suffix_parts)) {
        list_remove_last_verify(function_name_old_parts, part);
    }
}