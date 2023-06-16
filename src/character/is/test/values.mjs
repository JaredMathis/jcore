import { string_empty } from '../../../string/empty.mjs';
import { string_a } from '../../../string/a.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function character_is_test_values() {
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