import { metadata_generated } from '../../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { json_equal } from '../../../../../json/equal.mjs';
import { assert } from '../../../../../assert.mjs';
import { string_identifier_sub_is } from '../../is.mjs';
export function string_identifier_sub_is_test_1() {
    arguments_assert(arguments, []);
    let expected = true;
    let actual = string_identifier_sub_is('_');
    let v = json_equal(actual, expected);
    assert(v);
    metadata([metadata_generated()]);
}