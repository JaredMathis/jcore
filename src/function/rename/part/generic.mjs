import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { function_rename_generic } from '../generic.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
export async function function_rename_part_generic(part, parts_map) {
    function predicate_should_rename(n) {
        let parts = string_identifier_parts_from(n);
        let v = list_contains(parts, part);
        return v;
    }
    await function_rename_generic(predicate_should_rename, function_name_new_get);
    function function_name_new_get(n_old) {
        let parts = string_identifier_parts_from(n_old);
        parts_map(parts);
        let v_2 = string_identifier_parts_to(parts);
        return v_2;
    }
}