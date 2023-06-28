import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { directory_separator } from '../../separator.mjs';
import { directory_current } from '../../current.mjs';
export function directory_current_with_separator() {
    arguments_assert(arguments, []);
    let v = directory_current();
    let v_2 = directory_separator();
    return `${ v }${ v_2 }`;
    metadata([]);
}