import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { json_to } from '../json/to.mjs';
import { js_parse } from './parse.mjs';
import { try_catch } from '../try/catch.mjs';
import escodegen from 'escodegen';
export function js_unparse(parsed) {
    arguments_assert(arguments, [defined_is]);
    let v = json_to(parsed);
    let v_2 = try_catch(js_parse, lambda, v);
    return v_2;
    function lambda() {
        let v_3 = escodegen.generate(parsed);
        return v_3;
    }
    metadata([]);
}