import { comment } from '../../comment.mjs';
import { throws } from '../../throws.mjs';
throws(() => comment('test', 'extra argument'));