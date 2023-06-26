import { list_multiple_combine } from '../../../list/multiple/combine.mjs';
import { character_is_tests_values } from '../../../character/is/tests/values.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_empty } from '../../empty.mjs';
import { string_a } from '../../a.mjs';
export function string_is_tests_values() {
    arguments_assert(arguments, []);
    let aa = `${ string_a() }${ string_a() }`;
    let v = list_multiple_combine([
        character_is_tests_values(),
        [
            string_empty(),
            aa,
            `${ aa }b`
        ]
    ]);
    return v;
    metadata([]);
}