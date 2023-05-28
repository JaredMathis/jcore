import { number_is } from '../../../number/is.mjs';
import { arguments_assert } from '../../assert.mjs';
arguments_assert([
    1,
    2,
    3
], [
    number_is,
    number_is,
    number_is
]);