import { json_from } from './from.mjs';
import { throws } from '../throws.mjs';
export function json_invalid(task_body_value) {
    let v = throws(function v_2() {
        let v_3 = json_from(task_body_value);
        return v_3;
    });
    return v;
}