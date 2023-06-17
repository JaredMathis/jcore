import { refactor_import_fix } from '../../fix.mjs';
import { changed } from '../../../../changed.mjs';
export async function refactor_import_fix_if_changed(changed_lambda, args) {
    let c = changed(changed_lambda);
    if (c) {
        await refactor_import_fix(args);
    }
}