import { js_if_identifier_or_null_generic } from '../../../or/null/generic.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_identifier_name_get } from '../../../../../identifier/name/get.mjs';
export function js_if_identifier_then_name_or_null(node, property_name, or_null) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = js_if_identifier_or_null_generic(node, property_name, or_null, lambda);
    return v;
    function lambda(property) {
        let name = js_identifier_name_get(property);
        return name;
    }
}