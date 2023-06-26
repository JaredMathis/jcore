import { metadata } from '../../../metadata.mjs';
import { task_body_map_generic } from './generic.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { json_map_empty_if_null } from '../../../json/map/empty/if/null.mjs';
import { function_is } from '../../../function/is.mjs';
import { string_is } from '../../../string/is.mjs';
export async function task_body_map_json(issue_number, map) {
    arguments_assert(arguments, [
        string_is,
        function_is
    ]);
    let lambda = function v(task_body_value) {
        let v_2 = json_map_empty_if_null(task_body_value, map);
        return v_2;
    };
    let result = await task_body_map_generic(issue_number, lambda);
    return result;
    metadata([]);
}