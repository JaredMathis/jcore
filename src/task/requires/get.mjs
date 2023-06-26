import { metadata } from '../../metadata.mjs';
import { null_is } from '../../null/is.mjs';
import { task_body_requires } from '../body/requires.mjs';
import { task_body_parse } from '../body/parse.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { task_is } from '../is.mjs';
export function task_requires_get(task) {
    arguments_assert(arguments, [task_is]);
    let body_parsed = task_body_parse(task);
    let v = null_is(body_parsed);
    if (v) {
        return [];
    }
    let requires = task_body_requires(body_parsed);
    return requires;
    metadata([]);
}