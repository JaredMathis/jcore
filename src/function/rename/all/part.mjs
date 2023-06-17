import { list_set } from '../../../list/set.mjs';
import { list_index_of_single } from '../../../list/index/of/single.mjs';
import { function_rename_part_generic } from '../part/generic.mjs';
import { string_identifier_part_is } from '../../../string/identifier/part/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
import { equal } from '../../../equal.mjs';
export async function function_rename_all_part(part_old, part_new) {
    arguments_assert(arguments, [
        string_identifier_part_is,
        string_identifier_part_is
    ]);
    assert(!(equal(part_old, part_new)));
    await function_rename_part_generic(part_old, parts_map);
    function parts_map(parts) {
        let index = list_index_of_single(parts, part_old);
        list_set(parts, index, part_new);
    }
}