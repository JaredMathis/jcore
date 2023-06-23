import { list_string_prefix_without_multiple } from '../../../list/string/prefix/without/multiple.mjs';
import { function_name_separator_combine } from '../../../function/name/separator/combine.mjs';
import { list_map } from '../../../list/map.mjs';
export function js_identifiers_prefixes_without(prefixes, identifier_names) {
    let mapped = list_map(prefixes, function_name_separator_combine);
    return list_string_prefix_without_multiple(identifier_names, mapped);
}