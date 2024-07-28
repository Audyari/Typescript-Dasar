
import {sayHello} from '../../src/1. Say Hello Function/say_Hello';

describe('Bikin sayHello', () => {
    it('should return sayHello', () => {
        expect(sayHello('Audyari W')).toBe('Hello, Audyari W!');
    });
})