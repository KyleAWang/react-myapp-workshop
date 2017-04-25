import { SAY_HELLO } from './constants';

export function sayHyllo(content) {
    return {
        type: SAY_HELLO,
        content,
    }
}