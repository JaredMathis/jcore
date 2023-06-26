import { boolean_value_true } from '../boolean/value/true.mjs';
import { boolean_value_false } from '../boolean/value/false.mjs';
import { metadata_function_call_arguments_are_identifiers_none } from '../metadata/function/call/arguments/are/identifiers/none.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import fs from 'fs';
import { path_is } from './is.mjs';
export function path_exists(file_path) {
    arguments_assert(arguments, [path_is]);
    let v_4 = function v_3() {
        let v_5 = boolean_value_false();
        return v_5;
    };
    let v = fs.promises.access(file_path, fs.constants.F_OK).then(function v_2() {
        let v_6 = boolean_value_true();
        return v_6;
    }).catch(v_4);
    return v;
    metadata([metadata_function_call_arguments_are_identifiers_none()]);
}