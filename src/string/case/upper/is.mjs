import { and } from '../../../and.mjs';
import { string_to_case_upper } from '../../to/case/upper.mjs';
import { equal } from '../../../equal.mjs';
import { string_letter_is } from '../../letter/is.mjs';
export function string_case_upper_is(c) {
    return and(string_letter_is(c), equal(string_to_case_upper(c), c));
}