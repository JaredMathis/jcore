import { string_to } from '../../../string/to.mjs';
import { list_last } from '../../last.mjs';
export function list_last_string_to(required_bys) {
    let last = list_last(required_bys);
    let last_string = string_to(last);
    return last_string;
}