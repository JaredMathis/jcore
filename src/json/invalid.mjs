import { json_from } from './from.mjs';
import { throws } from '../throws.mjs';
export function json_invalid(task_body_value) {
    let v_4 = function v_2() {
        let v_3 = json_from(task_body_value);
        return v_3;
    };
    let v = throws(v_4);
    return v;
}