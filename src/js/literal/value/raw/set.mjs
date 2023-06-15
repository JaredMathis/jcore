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
    object_property_set(source, js_node_property_value(), normalized);
    assert(!string_includes(normalized, '\''));
    let raw = js_code_expression_string(normalized);
    object_property_set(source, js_node_property_raw(), raw);
}