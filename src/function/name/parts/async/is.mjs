import { metadata } from '../../../../metadata.mjs';
import { function_name_async_is } from '../../async/is.mjs';
import { js_identifier_parts_from } from '../../../../js/identifier/parts/from.mjs';
export async function function_name_parts_async_is(candidate_mapped) {
    let function_name = js_identifier_parts_from(candidate_mapped);
    let async_is = await function_name_async_is(function_name);
    return async_is;
    metadata([]);
}