import {array_last_index} from './index.mjs';

export function array_last_map(list, mapper) {
    list[array_last_index(list)] = mapper(list[array_last_index(list)]);
}