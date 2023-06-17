import { js_node_property_type_get } from '../property/type/get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { string_empty_not_is } from '../../../string/empty/not/is.mjs';
export function js_node_is_type(node, type_expected) {
    arguments_assert(arguments, [
        defined_is,
        string_empty_not_is
    ]);
    const type_actual = js_node_property_type_get(node);
    return type_actual === type_expected;
    metadata([]);
}