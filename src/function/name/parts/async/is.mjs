import { function_name_async_is } from '../../async/is.mjs';
import { string_identifier_parts_from } from '../../../../string/identifier/parts/from.mjs';
export async function function_name_parts_async_is(candidate_mapped) {
    let function_name = string_identifier_parts_from(candidate_mapped);
    let async_is = await function_name_async_is(function_name);
    return async_is;
}