import { function_rename_part_generic } from './generic.mjs';
import { string_identifier_part_is } from '../../../string/identifier/part/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove } from '../../../list/remove.mjs';
export async function function_rename_part_remove(part) {
    arguments_assert(arguments, [string_identifier_part_is]);
    await function_rename_part_generic(part, parts_map);
    function parts_map(parts) {
        list_remove(parts, part);
    }
}