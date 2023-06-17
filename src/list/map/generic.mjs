import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_each_with_index } from '../each/with/index.mjs';
import { list_adder } from '../adder.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_map_generic(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    return list_adder(la => {
        list_each_with_index(list, (element, index) => {
            let mapped = lambda(element, index);
            la(result, mapped);
        });
    });
    metadata([metadata_generated()]);
}