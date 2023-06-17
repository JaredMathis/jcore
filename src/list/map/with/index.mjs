import { metadata_generated } from '../../../metadata/generated.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_map_generic } from '../generic.mjs';
import { function_is } from '../../../function/is.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function list_map_with_index(list, mapper) {
    arguments_assert(arguments, [
        list_is,
        function_is
    ]);
    return list_map_generic(list, mapper, false);
    metadata([metadata_generated()]);
}