import { speed_log } from './log.mjs';
import { speed_start } from './start.mjs';
import { speed_next } from './next.mjs';
export function speed_group(lambda) {
    function checkpoint() {
        speed_next(s);
    }
    let s = speed_start();
    lambda(checkpoint);
    checkpoint();
    speed_log(s);
    return s;
}