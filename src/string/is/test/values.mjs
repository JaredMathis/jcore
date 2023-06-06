import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_empty } from '../../empty.mjs';
import { string_a } from '../../a.mjs';
export function string_is_test_values() {
    arguments_assert(arguments, []);
    let aa = `${ string_a() }${ string_a() }`;
    return [
        string_empty(),
        string_a(),
        `b`,
        aa,
        `${ aa }b`
    ];
}