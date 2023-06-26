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
        return boolean_value_false();
    };
    let v = fs.promises.access(file_path, fs.constants.F_OK).then(function v_2() {
        return boolean_value_true();
    }).catch(v_4);
    return v;
    metadata([metadata_function_call_arguments_are_identifiers_none()]);
}