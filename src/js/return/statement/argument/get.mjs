import { js_node_property_argument } from '../../../node/property/argument.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { js_node_is_return_statment } from '../../../node/is/return/statment.mjs';
import { assert } from '../../../../assert.mjs';
export function js_return_statement_argument_get(object) {
    assert(js_node_is_return_statment(object));
    let arg = object_property_get(object, js_node_property_argument());
    return arg;
}