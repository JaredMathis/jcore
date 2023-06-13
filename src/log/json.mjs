import { json_to } from '../json/to.mjs';
import { log } from '../log.mjs';
export function log_json(o) {
    log(json_to(o));
}