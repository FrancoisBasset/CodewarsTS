import { switchItUp } from '../src/functions';

describe('switchItUp', function() {
    it('0 => Zero', function() {
        const result: string = switchItUp(0);

        result.should.be.equals('Zero');
    });

    it('1 => One', function() {
        const result: string = switchItUp(1);

        result.should.be.equals('One');
    });
});