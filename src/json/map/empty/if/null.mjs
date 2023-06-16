import { json_map } from '../../../map.mjs';
import { js_brace_left_right } from '../../../../js/brace/left/right.mjs';
import { null_is } from '../../../../null/is.mjs';
export function json_map_empty_if_null(task_body_value, map) {
    let body_before;
    if (null_is(task_body_value)) {
        body_before = js_brace_left_right();
    } else {
        body_before = task_body_value
    }
    let body_after = json_map(body_before, map);
    return body_after;
}