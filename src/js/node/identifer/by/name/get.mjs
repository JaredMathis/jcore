import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_identifier } from '../../../is/identifier.mjs';
import { assert } from '../../../../../assert.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is } from '../../../is.mjs';
import { js_identifier_is } from '../../../../identifier/is.mjs';
export function js_node_identifer_by_name_get(node, node_identifier_name) {
    arguments_assert(arguments, [
        js_node_is,
        js_identifier_is
    ]);
    let id = object_property_get(node, node_identifier_name);
    let v = js_node_is_identifier(id);
    assert(v);
    return id;
    metadata([]);
}