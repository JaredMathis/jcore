import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { integer_mod } from '../../../mod.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function integer_mod_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = 1;
    let actual = integer_mod(1, -2);
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}