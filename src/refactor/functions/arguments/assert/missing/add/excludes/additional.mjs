import { metadata } from '../../../../../../../metadata.mjs';
import { git_no_commit } from '../../../../../../../git/no/commit.mjs';
import { git } from '../../../../../../../git.mjs';
import { arguments_assert_predicate_default } from '../../../../../../../arguments/assert/predicate/default.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../../../../metadata/arguments/assert/extra/allow.mjs';
import { function_name_get } from '../../../../../../../function/name/get.mjs';
export function refactor_functions_arguments_assert_missing_add_excludes_additional() {
    let v = function_name_get(metadata_arguments_assert_extra_allow);
    let v_2 = arguments_assert_predicate_default();
    let v_3 = function_name_get(v_2);
    let v_4 = function_name_get(git);
    let v_5 = function_name_get(git_no_commit);
    return [
        v,
        v_3,
        v_4,
        v_5
    ];
    metadata([]);
}