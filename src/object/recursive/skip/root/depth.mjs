import { list_empty } from '../../../../list/empty.mjs';
import { object_keys } from '../../../keys.mjs';
import { object_recursive_property_value } from '../../property/value.mjs';
import { object_property_get } from '../../../property/get.mjs';
import { add_1 } from '../../../../add/1.mjs';
import { list_length } from '../../../../list/length.mjs';
import { object_recursive_skip_root } from '../root.mjs';
import { list_adder } from '../../../../list/adder.mjs';
import { object_copy_shallow } from '../../../copy/shallow.mjs';
export function object_recursive_skip_root_depth(object, depth) {
    const max = add_1(depth);
    return list_adder(la => {
        object_recursive_skip_root(object, function lambda(v) {
            let {node, stack} = v;
            let stack_length = list_length(stack);
            if (stack_length > max) {
                return;
            }
            if (stack_length < max) {
                return;
            }
            la(object_copy_shallow(stack));
            return;
            let node_value = object_property_get(node, object_recursive_property_value());
            let node_value_keys = object_keys(node_value);
            if (list_empty(node_value_keys)) {
            }
        });
    });
}