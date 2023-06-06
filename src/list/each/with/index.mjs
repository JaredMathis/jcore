import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_get } from '../../get.mjs';
import { list_length } from '../../length.mjs';
import { range } from '../../../range.mjs';
import { tautology } from '../../../tautology.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_each_with_index(list, lambda) {
    arguments_assert(arguments, [
        list_is,
        tautology
    ]);
    const r = range(list_length(list));
    for (let index of r) {
        let element = list_get(list, index);
        lambda(element, index);
    }
    metadata([metadata_generated()]);
}