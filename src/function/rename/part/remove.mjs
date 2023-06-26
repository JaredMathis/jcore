import { metadata } from '../../../metadata.mjs';
import { function_rename_part_generic } from './generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_remove } from '../../../list/remove.mjs';
import { js_identifier_is } from '../../../js/identifier/is.mjs';
export async function function_rename_part_remove(part) {
    arguments_assert(arguments, [js_identifier_is]);
    await function_rename_part_generic(part, parts_map);
    function parts_map(parts) {
        list_remove(parts, part);
    }
    metadata([]);
}