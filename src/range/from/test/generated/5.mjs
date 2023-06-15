import { metadata_generated } from '../../../../metadata/generated.mjs';
import { metadata } from '../../../../metadata.mjs';
import { range_from } from '../../../from.mjs';
import { throws } from '../../../../throws.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function range_from_test_generated_5() {
    arguments_assert(arguments, []);
    assert(throws(() => range_from(3, -1)));
    metadata([metadata_generated()]);
}