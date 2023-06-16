import { json_to } from './to.mjs';
import { json_from } from './from.mjs';
export function json_map(json_before, map) {
    let json_parsed = json_from(json_before);
    map(json_parsed);
    let json_after = json_to(json_parsed);
    return json_after;
}