import { log } from '../../log.mjs';
export function log_multiple_map(list, mapper) {
    for (let element of list) {
        let mapped = mapper(element);
        log(mapped);
    }
}