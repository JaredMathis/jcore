import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_set } from '../../../set.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function string_set_test_generated_10() {
    arguments_assert(arguments, []);
    let expected = 'a';
    let actual = string_set('b', 0, 'a');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}