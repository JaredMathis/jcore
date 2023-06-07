import { metadata_generated } from '../../../../metadata/generated.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { json_equal } from '../../../../json/equal.mjs';
import { assert } from '../../../../assert.mjs';
import { string_includes } from '../../../includes.mjs';
export function string_includes_test_generated_1() {
    arguments_assert(arguments, []);
    let expected = false;
    let actual = string_includes('aa', 'b');
    assert(json_equal(actual, expected));
    metadata([metadata_generated()]);
}