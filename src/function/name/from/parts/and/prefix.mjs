import { string_identifier_parts_from_combine } from '../../../../../string/identifier/parts/from/combine.mjs';
export function function_name_from_parts_and_prefix(prefix, function_name_suffix_parts) {
    const list_with_multiple_lists = [
        [prefix],
        function_name_suffix_parts
    ];
    let function_name_refactor = string_identifier_parts_from_combine(list_with_multiple_lists);
    return function_name_refactor;
}