import { json_from } from '../from.mjs';
import { throws } from '../../throws.mjs';
export function json_from_throws(task_body_value) {
    return throws(() => json_from(task_body_value));
}