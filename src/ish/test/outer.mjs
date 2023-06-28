import { metadata } from '../../metadata.mjs';
import { ish_greet } from '../greet.mjs';
import { aa_ish_test } from '../../aa/ish/test.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { occurs } from '../../occurs.mjs';
import { log } from '../../log.mjs';
export function ish_test_outer() {
    arguments_assert(arguments, []);
    let a = occurs(function v(o) {
        if (true) {
            o();
        }
    });
    let b = occurs(function v_2(o) {
        if (false) {
            o();
        }
    });
    log({
        a,
        b
    });
    return;
    ish_greet(123);
    return aa_ish_test('jared', ish_greet);
    metadata([]);
}