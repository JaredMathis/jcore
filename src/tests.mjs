import { error_test_3 } from './error/test/3.mjs';
import { error_test_2 } from './error/test/2.mjs';
import { error_test_1 } from './error/test/1.mjs';
import { comment_test_3 } from './comment/test/3.mjs';
import { comment_test_2 } from './comment/test/2.mjs';
import { comment_test_1 } from './comment/test/1.mjs';
import { assert_test_5 } from './assert/test/5.mjs';
import { assert_test_4 } from './assert/test/4.mjs';
import { assert_test_3 } from './assert/test/3.mjs';
import { assert_test_2 } from './assert/test/2.mjs';
import { assert_test_1 } from './assert/test/1.mjs';
import { arguments_count_test_5 } from './arguments/count/test/5.mjs';
import { arguments_count_test_4 } from './arguments/count/test/4.mjs';
import { arguments_count_test_3 } from './arguments/count/test/3.mjs';
import { arguments_count_test_2 } from './arguments/count/test/2.mjs';
import { arguments_count_test_1 } from './arguments/count/test/1.mjs';
import { arguments_assert_test_4 } from './arguments/assert/test/4.mjs';
import { arguments_assert_test_3 } from './arguments/assert/test/3.mjs';
import { arguments_assert_test_2 } from './arguments/assert/test/2.mjs';
import { arguments_assert_test_1 } from './arguments/assert/test/1.mjs';
export async function tests() {
    await arguments_assert_test_1();
    await arguments_assert_test_2();
    await arguments_assert_test_3();
    await arguments_assert_test_4();
    await arguments_count_test_1();
    await arguments_count_test_2();
    await arguments_count_test_3();
    await arguments_count_test_4();
    await arguments_count_test_5();
    await assert_test_1();
    await assert_test_2();
    await assert_test_3();
    await assert_test_4();
    await assert_test_5();
    await comment_test_1();
    await comment_test_2();
    await comment_test_3();
    await error_test_1();
    await error_test_2();
    await error_test_3();
}