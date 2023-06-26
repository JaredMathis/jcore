import { metadata } from '../../../../../metadata.mjs';
import { defined_is } from '../../../../../defined/is.mjs';
import { js_node_type_for_of_statement } from '../../../type/for/of/statement.mjs';
import { js_node_is_type } from '../../type.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_node_is_for_of_statement(value) {
    arguments_assert(arguments, [defined_is]);
    let v = js_node_type_for_of_statement();
    let v_2 = js_node_is_type(value, v);
    return v_2;
    metadata([]);
}