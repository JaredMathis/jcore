import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_identifier_parts_from } from '../parts/from.mjs';
import { list_remove_last_verify_multiple } from '../../../list/remove/last/verify/multiple.mjs';
import { js_identifier_parts_to } from '../parts/to.mjs';
import { js_identifier_is } from '../is.mjs';
export function js_identifier_suffix_remove(before, suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        js_identifier_is
    ]);
    let suffix_parts = js_identifier_parts_to(suffix);
    let before_parts = js_identifier_parts_to(before);
    list_remove_last_verify_multiple(before_parts, suffix_parts);
    let after = js_identifier_parts_from(before_parts);
    return after;
}