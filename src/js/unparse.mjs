import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { json_to } from '../json/to.mjs';
import { js_parse } from './parse.mjs';
import { try_catch } from '../try/catch.mjs';
import escodegen from 'escodegen';
export function js_unparse(parsed) {
    arguments_assert(arguments, [defined_is]);
    return try_catch(js_parse, lambda, json_to(parsed));
    function lambda() {
        return escodegen.generate(parsed);
    }
    metadata([]);
}