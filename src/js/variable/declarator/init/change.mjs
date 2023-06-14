import { js_node_property_init } from '../../../node/property/init.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
import { js_node_is_variable_declarator } from '../../../node/is/variable/declarator.mjs';
import { assert } from '../../../../assert.mjs';
export function js_variable_declarator_init_change(declaration, value_parsed) {
    assert(js_node_is_variable_declarator(declaration));
    object_property_change(declaration, js_node_property_init(), value_parsed);
}