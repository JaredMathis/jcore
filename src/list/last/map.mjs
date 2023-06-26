import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_last_index } from './index.mjs';
import { function_is } from '../../function/is.mjs';
export function list_last_map(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    let v = list[list_last_index(list)];
    list[list_last_index(list)] = mapper(v);
    metadata([]);
}