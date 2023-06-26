import { boolean_value_false } from '../../../../boolean/value/false.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_map_generic_async } from '../../generic/async.mjs';
import { function_is } from '../../../../function/is.mjs';
import { list_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function list_map_with_index_async(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let v_2 = boolean_value_false();
    let v_3 = null;
    let v = await list_map_generic_async(list, mapper, v_2, v_3);
    return v;
    metadata([]);
}