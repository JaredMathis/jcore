import { metadata } from '../../../../../../metadata.mjs';
import { integer_value_76 } from '../../../../../../integer/value/76.mjs';
import { integer_value_62 } from '../../../../../../integer/value/62.mjs';
import { task_description_to_json_if_unparsable_generic } from './generic.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { string_combine_multiple } from '../../../../../../string/combine/multiple.mjs';
export async function task_description_to_json_if_unparsable_bugs() {
    arguments_assert(arguments, []);
    const body_62 = [
        'If file ends in _async\r\n',
        'There must be a non-async version?\r\n',
        '\r\n',
        ' node run.mjs git function_unasyncify \r\n',
        '\r\n',
        'Therefore  function_unasyncify  can safely remove _async suffix'
    ];
    let v_2 = integer_value_62();
    let v_3 = 'Maybe enforce naming convention of _async';
    let v_4 = 'open';
    let v_5 = string_combine_multiple(body_62);
    let v_6 = integer_value_76();
    let v_7 = 'release function';
    let v_8 = 'open';
    let v_9 = 'release should run all tests, enforce all rules';
    let bugs = [
        {
            number: v_2,
            title: v_3,
            state: v_4,
            body: v_5
        },
        {
            number: v_6,
            title: v_7,
            state: v_8,
            body: v_9
        }
    ];
    let v = await task_description_to_json_if_unparsable_generic(bugs);
    return v;
    metadata([]);
}