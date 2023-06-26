import { metadata } from '../../metadata.mjs';
export async function if_else_async(if_check, on_if, on_else) {
    if (if_check) {
        let v = await on_if();
        return v;
    } else {
        let v_2 = await on_else();
        return v_2;
    }
    metadata([]);
}