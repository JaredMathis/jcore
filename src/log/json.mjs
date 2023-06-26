import { metadata } from '../metadata.mjs';
import { json_to } from '../json/to.mjs';
import { log } from '../log.mjs';
export function log_json(o) {
    let v = json_to(o);
    log(v);
    metadata([]);
}