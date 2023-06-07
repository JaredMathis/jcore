import { function_tests_generate_generic } from './generate/generic.mjs';
import { command_line } from '../../command/line.mjs';
import { tests_generate } from '../../tests/generate.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_name_get } from '../name/get.mjs';
import { comment } from '../../comment.mjs';
import { log } from '../../log.mjs';
import { tests } from '../../tests.mjs';
export async function function_tests_generate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    await function_tests_generate_generic(function_name);
    await tests_generate();
    comment(`NodeJS will not re-import ${ tests } after we re-generate it so we must run through command line`);
    let cl_result = await command_line(`node run.mjs ${ function_name_get(tests) }`);
    let stdout = object_property_get(cl_result, 'stdout');
    log(stdout);
}