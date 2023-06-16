import { date_now } from '../now.mjs';
export function date_now_iso() {
    return date_now().toISOString();
}