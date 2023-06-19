import { assert } from '../../assert.mjs';
import { assert_json } from '../../assert/json.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from './exists.mjs';
export function object_property_get(object, property_name) {
    let v = object_property_exists(object, property_name);
    assert(v);
    if (false)
        assert_json(v, {
            object,
            property_name
        });
    return object[property_name];
    metadata([]);
}