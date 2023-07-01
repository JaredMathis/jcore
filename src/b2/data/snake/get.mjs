import { object_keys_camel_to_snake } from '../../../object/keys/camel/to/snake.mjs';
import { b2_property_data_get } from '../../property/data/get.mjs';
export function b2_data_snake_get(result) {
    let data = b2_property_data_get(result);
    let data_snake = object_keys_camel_to_snake(data);
    return data_snake;
}