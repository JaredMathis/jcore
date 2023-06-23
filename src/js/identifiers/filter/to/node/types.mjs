import { list_string_prefix_without_multiple } from '../../../../../list/string/prefix/without/multiple.mjs';
import { function_name_separator_combine } from '../../../../../function/name/separator/combine.mjs';
import { js_prefix_node_is } from '../../../../prefix/node/is.mjs';
import { js_prefix_node_type } from '../../../../prefix/node/type.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { list_map } from '../../../../../list/map.mjs';
export function js_identifiers_filter_to_node_types(identifier_names) {
    arguments_assert(arguments, [list_is]);
    const prefixes = [
        js_prefix_node_is(),
        js_prefix_node_type()
    ];
    return js_identifiers_prefixes_without(prefixes, identifier_names);
}

function js_identifiers_prefixes_without(prefixes, identifier_names) {
    let mapped = list_map(prefixes, function_name_separator_combine);
    return list_string_prefix_without_multiple(identifier_names, mapped);
}
