import { removeChar } from '../src/functions';

type RemoveChar = [string, string];

describe('removeChar', function() {
    const data: RemoveChar[] = [
        ['eloquent', 'loquen'],
        ['country', 'ountr'],
        ['person', 'erso'],
        ['place', 'lac']
    ];

    data.forEach(function([str, result]) {
        it(`${str} => ${result}`, function() {
            const result: string = removeChar(str);
    
            result.should.be.equals(result);
        });
    });
});