import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_map_generic } from './generic.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_map_try(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let lambda = (element, index) => {
        let v = mapper(element);
        return v;
    };
    let v_2 = list_map_generic(list, lambda, true, null);
    return v_2;
    metadata([metadata_generated()]);
}