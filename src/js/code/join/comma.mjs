import { list_join } from '../../../list/join.mjs';
export function js_code_join_comma(params_mapped) {
    let v_2 = ', ';
    let v = list_join(params_mapped, v_2);
    return v;
}