import { js_prefix_node_property } from '../../../../prefix/node/property.mjs';
import { js_identifiers_prefixes_without } from '../../../prefixes/without.mjs';
import { list_is } from '../../../../../list/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_to_dictionary } from '../../../../../list/to/dictionary.mjs';
export function js_identifiers_filter_to_node_properties(identifier_names) {
    arguments_assert(arguments, [list_is]);
    const prefixes = [js_prefix_node_property()];
    let filtered = js_identifiers_prefixes_without(prefixes, identifier_names);
    let suffixes = ['get']
    let result = list_to_dictionary(suffixes, suffix => js_identifiers_suffixes_without([suffix], filtered))
    return result;
}