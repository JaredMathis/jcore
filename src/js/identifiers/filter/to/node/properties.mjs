import { js_identifiers_prefixes_without } from '../../../prefixes/without.mjs';
import { js_prefix_node_type } from '../../../../prefix/node/type.mjs';
import { js_prefix_node_is } from '../../../../prefix/node/is.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_identifiers_filter_to_node_properties(identifier_names) {
    arguments_assert(arguments, [list_is]);
    const prefixes = [
        js_prefix_node_is(),
        js_prefix_node_type()
    ];
    return js_identifiers_prefixes_without(prefixes, identifier_names);
}