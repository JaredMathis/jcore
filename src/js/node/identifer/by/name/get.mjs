import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_identifier } from '../../../is/identifier.mjs';
import { assert } from '../../../../../assert.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { defined_is } from '../../../../../defined/is.mjs';
import { string_is } from '../../../../../string/is.mjs';
export function js_node_identifer_by_name_get(node, node_identifier_name) {
    arguments_assert(arguments, [
        defined_is,
        string_is
    ]);
    let id = object_property_get(node, node_identifier_name);
    assert(js_node_is_identifier(id));
    return id;
    metadata([]);
}