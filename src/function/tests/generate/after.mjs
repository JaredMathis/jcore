import { log } from '../../../log.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { function_name_get } from '../../name/get.mjs';
import { command_line } from '../../../command/line.mjs';
import { tests } from '../../../tests.mjs';
import { comment } from '../../../comment.mjs';
import { tests_generate } from '../../../tests/generate.mjs';
export async function function_tests_generate_after() {
    await tests_generate();
    comment(`NodeJS will not re-import ${ tests } after we re-generate it so we must run through command line`);
    let cl_result = await command_line(`node run.mjs ${ function_name_get(tests) }`);
    let stdout = object_property_get(cl_result, 'stdout');
    log(stdout);
}