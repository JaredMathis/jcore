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
    let v = function_name_get(fn);
    let v_2 = list_to(args);
    return {
        command: v,
        args: v_2
    };
    metadata([]);
}