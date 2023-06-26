import { metadata } from '../../metadata.mjs';
import { date_now } from '../now.mjs';
export function date_now_iso() {
    let v = date_now().toISOString();
    return v;
    metadata([]);
}