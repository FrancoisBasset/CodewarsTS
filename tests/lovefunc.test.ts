import { lovefunc } from '../src/functions';

type LoveFunc = [ number, number, boolean];

describe('lovefunc', function() {
    const data: LoveFunc[] = [
        [1, 4, true],
        [2, 2, false],
        [0, 1, true],
        [0, 0, false]
    ];

    data.forEach(function([flower1, flower2, result]) {
        it(`${flower1}, ${flower2} => ${result}`, function() {
            const result: boolean = lovefunc(flower1, flower2);
    
            result.should.be.equals(result);
        });
    });
})