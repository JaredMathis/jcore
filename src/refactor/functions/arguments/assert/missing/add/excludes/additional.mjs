import { git_no_commit } from '../../../../../../../git/no/commit.mjs';
import { git } from '../../../../../../../git.mjs';
import { arguments_assert_predicate_default } from '../../../../../../../arguments/assert/predicate/default.mjs';
import { metadata_arguments_assert_extra_allow } from '../../../../../../../metadata/arguments/assert/extra/allow.mjs';
import { function_name_get } from '../../../../../../../function/name/get.mjs';
export function refactor_functions_arguments_assert_missing_add_excludes_additional() {
    return [
        function_name_get(metadata_arguments_assert_extra_allow),
        function_name_get(arguments_assert_predicate_default()),
        function_name_get(git),
        function_name_get(git_no_commit)
    ];
}