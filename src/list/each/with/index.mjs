import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_get } from '../../get.mjs';
import { list_length } from '../../length.mjs';
import { range } from '../../../range.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { function_is } from '../../../function/is.mjs';
export function list_each_with_index(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let v = list_length(list);
    const r = range(v);
    for (let index of r) {
        let element = list_get(list, index);
        lambda(element, index);
    }
    metadata([metadata_generated()]);
}