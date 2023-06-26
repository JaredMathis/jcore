import { list_string_prefix_without_multiple } from '../../../list/string/prefix/without/multiple.mjs';
import { function_name_separator_append } from '../../../function/name/separator/append.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_identifiers_prefixes_without(prefixes, identifier_names) {
    let mapped = list_map(prefixes, function_name_separator_append);
    let v = list_string_prefix_without_multiple(identifier_names, mapped);
    return v;
}