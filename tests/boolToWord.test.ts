import { boolToWord } from '../src/functions';
import chai from 'chai';
chai.should();

describe('boolToWord', function() {
    it('Yes => true', function() {
        const result: string = boolToWord(true);

        result.should.be.equals('Yes');
    });

    it('No => false', function() {
        const result: string = boolToWord(false);

        result.should.be.equals('No');
    });
});