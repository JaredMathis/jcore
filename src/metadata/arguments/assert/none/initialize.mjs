import { metadata } from '../../../../metadata.mjs';
import { metadata_prefix } from '../../../prefix.mjs';
import { string_prefix_without } from '../../../../string/prefix/without.mjs';
import { metadata_arguments_assert_none } from '../none.mjs';
import { function_metadata_add } from '../../../../function/metadata/add.mjs';
import { refactor_functions_arguments_assert_missing_add_excludes_additional } from '../../../../refactor/functions/arguments/assert/missing/add/excludes/additional.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
export async function metadata_arguments_assert_none_initialize() {
    arguments_assert(arguments, []);
    const excludes_additional = refactor_functions_arguments_assert_missing_add_excludes_additional();
    for (let e of excludes_additional) {
        const fn = function_name_get(metadata_arguments_assert_none);
        let v = metadata_prefix();
        let without_prefix = string_prefix_without(fn, v);
        await function_metadata_add(e, without_prefix);
    }
    metadata([]);
}