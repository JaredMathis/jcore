import { object_property_exists } from '../property/exists.mjs';
import { object_property_get } from '../property/get.mjs';
import { list_map } from '../../list/map.mjs';
import { object_keys } from '../keys.mjs';
import { visit } from '../../visit.mjs';
import { list_adder_unique } from '../../list/adder/unique.mjs';
export function object_keys_recursive(result) {
    return list_adder_unique(function v_5(la) {
        let property_key = 'key';
        visit({ value: result }, function v_3(node) {
            let {value} = node;
            let keys = object_keys(value);
            return list_map(keys, function v_4(key) {
                return {
                    [property_key]: key,
                    value: object_property_get(value, key)
                };
            });
        }, function v_2(v) {
            let {node} = v;
            if (!object_property_exists(node, property_key)) {
                return;
            }
            let key = object_property_get(node, property_key);
            la(key);
        });
    });
}