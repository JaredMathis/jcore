import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { string_identifier_part_is } from '../../../string/identifier/part/is.mjs';
import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { function_rename_generic } from '../generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { list_remove } from '../../../list/remove.mjs';
export async function function_rename_part_remove(part) {
    arguments_assert(arguments, [string_identifier_part_is]);
    function predicate_should_rename(n) {
        let parts = string_identifier_parts_from(n);
        return list_contains(parts, part);
    }
    await function_rename_generic(predicate_should_rename, function_name_new_get);
    function function_name_new_get(n_old) {
        let parts = string_identifier_parts_from(n_old);
        parts_map(parts);
        return string_identifier_parts_to(parts);
    }
    function parts_map(parts) {
        list_remove(parts, part);
    }
}