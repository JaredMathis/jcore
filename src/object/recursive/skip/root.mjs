import { object_property_exists } from '../../property/exists.mjs';
import { object_recursive_property_key } from '../property/key.mjs';
import { object_recursive } from '../../recursive.mjs';
export function object_recursive_skip_root(result, lambda) {
    object_recursive(result, lambda_wrapper);
    function lambda_wrapper(v) {
        let {node} = v;
        let property_key = object_recursive_property_key();
        if (!object_property_exists(node, property_key)) {
            return;
        }
        lambda(v);
    }
}