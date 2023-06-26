import { defined_is } from '../../../../defined/is.mjs';
import { js_node_property_test } from '../test.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { metadata_tests_none } from '../../../../metadata/tests/none.mjs';
export function js_node_property_test_get(js_node) {
    arguments_assert(arguments, [defined_is]);
    let v = js_node_property_test();
    let v_2 = object_property_get(js_node, v);
    return v_2;
    metadata([metadata_tests_none()]);
}