
import {parseExp, multAndDiv, addAndSub, myMathEval} from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('parseExp parses all operators in expression', () => {
  expect(parseExp('-1+2*3/4*-5'))
    .toEqual(['-1', '+', '2', '*', '3', '/', '4', '*', '-5'])
})

test('parseExp parses larger neg numbers', () => {
  expect(parseExp('34*-45+-287--261'))
    .toEqual(['34', '*', '-45', '+', '-287', '-', '-261']);
})

test('parseExp parses decimals', () => {
  expect(parseExp('37.89-348.4'))
    .toEqual(['37.89', '-', '348.4']);
})

test('multAndDiv works 1', () =>  {
  expect(multAndDiv(['2',  '+', '3', '*', '4', '-', '5']))
    .toEqual(['2', '+', 12, '-', '5']);
})

test('multAndDiv works 2', () => {
  expect(multAndDiv(['2', '*', '11', '-', '10', '/', '-5']))
    .toEqual([22, '-', -2]);
})

test('recurisve calls in multAndDiv works', () => {
  expect(multAndDiv(['2', '*', '3', '*', '4']))
    .toEqual([24]);
})

test('andAndSub works', () => {
  expect(addAndSub(['1', '+', '2', '+', '3', '-', '4']))
    .toEqual(2);
})

test('evluating works', () => {
  expect(myMathEval("2*3.14*0.5+2*3.14*0.5*0.5"))
    .toEqual(4.71)
})

