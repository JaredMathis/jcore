import { metadata } from '../../../metadata.mjs';
import { equal_not } from '../../../equal/not.mjs';
import { list_set } from '../../../list/set.mjs';
import { list_index_of_single } from '../../../list/index/of/single.mjs';
import { function_rename_part_generic } from '../part/generic.mjs';
import { js_identifier_part_is } from '../../../js/identifier/part/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { assert } from '../../../assert.mjs';
export async function function_rename_all_part(part_old, part_new) {
    arguments_assert(arguments, [
        js_identifier_part_is,
        js_identifier_part_is
    ]);
    let v = equal_not(part_old, part_new);
    assert(v);
    await function_rename_part_generic(part_old, parts_map);
    function parts_map(parts) {
        let index = list_index_of_single(parts, part_old);
        list_set(parts, index, part_new);
    }
    metadata([]);
}