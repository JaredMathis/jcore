import { not } from '../../../../not.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_property_raw } from '../../../node/property/raw.mjs';
import { js_code_expression_string } from '../../../code/expression/string.mjs';
import { string_includes } from '../../../../string/includes.mjs';
import { assert } from '../../../../assert.mjs';
import { js_node_property_value } from '../../../node/property/value.mjs';
import { object_property_set } from '../../../../object/property/set.mjs';
export function js_literal_value_raw_set(source, normalized) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = js_node_property_value();
    object_property_set(source, v, normalized);
    let v_5 = '\'';
    let v_4 = string_includes(normalized, v_5);
    let v_2 = not(v_4);
    assert(v_2);
    let raw = js_code_expression_string(normalized);
    let v_3 = js_node_property_raw();
    object_property_set(source, v_3, raw);
}