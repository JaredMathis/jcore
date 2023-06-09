import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_property_init } from '../../../node/property/init.mjs';
import { object_property_change } from '../../../../object/property/change.mjs';
import { js_node_is_variable_declarator } from '../../../node/is/variable/declarator.mjs';
import { assert } from '../../../../assert.mjs';
export function js_variable_declarator_init_change(declaration, value_parsed) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = js_node_is_variable_declarator(declaration);
    assert(v);
    let v_2 = js_node_property_init();
    object_property_change(declaration, v_2, value_parsed);
    metadata([]);
}