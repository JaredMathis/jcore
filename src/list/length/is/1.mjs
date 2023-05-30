import { list_length } from '../../length.mjs';
export function list_length_is_1(specifiers) {
    const value = 1;
    return list_length_is_value(specifiers, value);
}

function list_length_is_value(specifiers, value) {
    return list_length(specifiers) === value;
}
