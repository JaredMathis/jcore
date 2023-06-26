import { metadata } from '../../../metadata.mjs';
import { and } from '../../../and.mjs';
import { string_to_case_upper } from '../../to/case/upper.mjs';
import { equal } from '../../../equal.mjs';
import { string_letter_is } from '../../letter/is.mjs';
export function string_case_upper_is(c) {
    let v = string_letter_is(c);
    let v_4 = string_to_case_upper(c);
    let v_2 = equal(v_4, c);
    let v_3 = and(v, v_2);
    return v_3;
    metadata([]);
}