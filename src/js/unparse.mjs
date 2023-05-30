import { json_from } from '../json/from.mjs';
import { js_parse } from './parse.mjs';
import { try_catch } from '../try/catch.mjs';
import escodegen from 'escodegen';
export function js_unparse(parsed) {
    if (false)
        json_from(parsed);
    return try_catch(js_parse, lambda);
    function lambda() {
        return escodegen.generate(parsed);
    }
}