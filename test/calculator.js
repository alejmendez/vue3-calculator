import { equal } from 'assert';
import { clear, isOperator, isDot, evaluate, addCharacterToEquation } from '../src/services/calculator.js';

describe('Calculator', function () {
  describe('#clear()', function () {
    it('should return 0 when the value is not present', function () {
      equal(clear(), '0');
    });
  });

  describe('#isOperator()', function () {
    it('should return true when the value is one of these symbols [+, -, /, *]', function () {
      ['+', '-', '/', '*'].forEach(s => {
        equal(isOperator(s), true);
      })
    });

    it('should return false when the value is different from any of these symbols [+, -, /, *]', function () {
      ['?', 'K', '9', '_', '', null, undefined, false].forEach(s => {
        equal(isOperator(s), false);
      })
    });
  });

  describe('#isDot()', function () {
    it('should return true when the value is dot', function () {
      equal(isDot('.'), true);
    });

    it('should return false when the value is not dot', function () {
      ['?', 'K', '9', '_', '', '+', '-', '/', '*', null, undefined, false].forEach(s => {
        equal(isDot(s), false);
      })
    });
  });

  describe('#evaluate()', function () {
    it('should return Error when the result is NaN', function () {
      equal(evaluate('0/0'), 'Error');
      equal(evaluate('0./0'), 'Error');
      equal(evaluate('Error'), 'Error');
    });

    it('should return the same equation when the value is not valid', function () {
      [
        '2+2+',
        '2+2-',
        '2+2*',
        '2+2/',
        '2+2.',
        '.',
        '0',
      ].forEach(e => {
        equal(evaluate(e), e);
      })
    });
  });

  describe('#addCharacterToEquation()', function () {
    it('should return the new equation', function () {
      const equation = '1+2';

      [
        '9',
        '+',
        '-',
        '*',
        '/',
        '.',
      ].forEach(e => {
        equal(addCharacterToEquation(equation, e), `${equation}${e}`);
      })
    });

    it('should return 0', function () {
      equal(addCharacterToEquation('1+2', 'all-clear'), '0');
      equal(addCharacterToEquation('0', '0'), '0');
      equal(addCharacterToEquation('0', '='), '0');
    });

    it('should return the same equation when the value is not valid', function () {
      equal(addCharacterToEquation('0.', '.'), '0.');
      equal(addCharacterToEquation('0.0', '.'), '0.0');
      equal(addCharacterToEquation('1+2+0.4', '.'), '1+2+0.4');

      equal(addCharacterToEquation('0', '+'), '0+');
      equal(addCharacterToEquation('0', '.'), '0.');
      equal(addCharacterToEquation('0', '9'), '9');
      equal(addCharacterToEquation('1+', '.'), '1+');
      equal(addCharacterToEquation('Error', '1'), '1');
      equal(addCharacterToEquation('Error', '.'), 'Error');
    });
  });
});
