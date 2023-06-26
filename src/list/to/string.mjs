import { list_join } from '../join.mjs';
export function list_to_string(prefixes) {
    return list_join(prefixes, ',');
}