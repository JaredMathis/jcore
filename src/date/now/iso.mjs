import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { date_now } from '../now.mjs';
export function date_now_iso() {
    arguments_assert(arguments, []);
    let v = date_now().toISOString();
    return v;
    metadata([]);
}