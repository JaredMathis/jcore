import { boolean_value_true } from '../boolean/value/true.mjs';
import { boolean_value_false } from '../boolean/value/false.mjs';
import { not } from '../not.mjs';
import { file_is } from './is.mjs';
import { path_is } from '../path/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { path_exists } from '../path/exists.mjs';
import { assert } from '../assert.mjs';
export async function file_exists(file_path) {
    arguments_assert(arguments, [path_is]);
    let v_3 = await path_exists(file_path);
    let v_2 = not(v_3);
    if (v_2) {
        let v_4 = boolean_value_false();
        return v_4;
    }
    let v = await file_is(file_path);
    assert(v);
    let v_5 = boolean_value_true();
    return v_5;
    metadata([]);
}