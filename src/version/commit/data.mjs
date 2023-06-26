import { metadata } from '../../metadata.mjs';
import { list_to } from '../../list/to.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { defined_is } from '../../defined/is.mjs';
import { function_is } from '../../function/is.mjs';
export function version_commit_data(fn, args) {
    arguments_assert(arguments, [
        function_is,
        defined_is
    ]);
    return {
        command: function_name_get(fn),
        args: list_to(args)
    };
    metadata([]);
}