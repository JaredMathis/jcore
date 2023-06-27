import { js_prefix_mapper_args_property } from '../../../../../prefix/mapper/args/property.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { js_suffix_get } from '../../../../../suffix/get.mjs';
import { js_identifiers_suffixes_without } from '../../../../suffixes/without.mjs';
import { js_prefix_node_property } from '../../../../../prefix/node/property.mjs';
import { js_identifiers_prefixes_without } from '../../../../prefixes/without.mjs';
import { list_is } from '../../../../../../list/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export function js_identifiers_filter_to_node_properties_get(identifier_names) {
    arguments_assert(arguments, [list_is]);
    const prefixes = [
        js_prefix_node_property(),
        js_prefix_mapper_args_property()
    ];
    for (let prefix of prefixes) {
        let filtered = js_identifiers_prefixes_without([prefix], identifier_names);
        let suffix = js_suffix_get();
        let v = [suffix];
        let v_2 = js_identifiers_suffixes_without(v, filtered);
        return v_2;
    }
    metadata([]);
}