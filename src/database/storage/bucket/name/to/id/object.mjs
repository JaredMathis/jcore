import { b2_property_data_get } from '../../../../../../b2/property/data/get.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { object_keys_include } from '../../../../../../object/keys/include.mjs';
import { object_keys_camel_to_snake } from '../../../../../../object/keys/camel/to/snake.mjs';
import { list_single } from '../../../../../../list/single.mjs';
import { object_property_get } from '../../../../../../object/property/get.mjs';
import { database_storage_bucket_name_object } from '../../object.mjs';
import { object_keys_to_camel } from '../../../../../../object/keys/to/camel.mjs';
export async function database_storage_bucket_name_to_id_object(b2) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await b2.getBucket(object_keys_to_camel(database_storage_bucket_name_object()));
    let data = b2_property_data_get(result);
    let buckets = object_property_get(data, 'buckets');
    let bucket = list_single(buckets);
    let mapped2 = object_keys_camel_to_snake(bucket);
    let mapped3 = object_keys_include(mapped2, ['bucket_id']);
    return mapped3;
}