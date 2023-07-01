import { function_is } from '../../is.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
import { function_rename_generic } from '../generic.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { js_identifier_parts_from } from '../../../js/identifier/parts/from.mjs';
export async function function_rename_part_generic(part, parts_map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        function_is
    ]);
    function predicate_should_rename(n) {
        let parts = js_identifier_parts_to(n);
        let v = list_contains(parts, part);
        return v;
    }
    await function_rename_generic(predicate_should_rename, function_name_new_get);
    function function_name_new_get(n_old) {
        let parts = js_identifier_parts_to(n_old);
        parts_map(parts);
        let v_2 = js_identifier_parts_from(parts);
        return v_2;
    }
    metadata([]);
}