import { result_property_data_get } from '../../result/property/data/get.mjs';
import { defined_is } from '../../defined/is.mjs';
import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { result_property_success_get } from '../../result/property/success/get.mjs';
import { assert } from '../../assert.mjs';
import { result_unsuccess_is } from '../../result/unsuccess/is.mjs';
import { changed } from '../../changed.mjs';
import { not } from '../../not.mjs';
import { throws_generic } from '../../throws/generic.mjs';
import { list_each_with_index } from '../each/with/index.mjs';
import { list_adder } from '../adder.mjs';
import { boolean_is } from '../../boolean/is.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_map_generic(list, lambda, allow_error_mapping, value_on_error_mapping) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        boolean_is,
        defined_is
    ]);
    return list_adder(la => {
        list_each_with_index(list, (element, index) => {
            let result = throws_generic(() => {
                return lambda(element, index);
            });
            let mapped;
            if (not(changed(c => {
                    if (allow_error_mapping) {
                        if (result_unsuccess_is(result)) {
                            mapped = value_on_error_mapping;
                            c();
                        }
                    } else {
                        assert(result_property_success_get(result));
                    }
                }))) {
                mapped = result_property_data_get(result);
            }
            la(mapped);
        });
    });
    metadata([metadata_generated()]);
}