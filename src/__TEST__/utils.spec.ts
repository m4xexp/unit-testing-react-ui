describe('Utilities test', () => {
  const fizzBuzz = (num: number): string[] => {
    const fizzBuzzArr: string[] = [];
    let i = 1;

    while (i <= num) {
      if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzzArr.push('FizzBuzz');
      } else if (i % 3 === 0) {
        fizzBuzzArr.push('Fizz');
      } else if (i % 5 === 0) {
        fizzBuzzArr.push('Buzz');
      } else fizzBuzzArr.push(i.toString());

      i++;
    }

    return fizzBuzzArr;
  };

  it.each([
    {
      num: 1,
      expected: ['1'],
    },
    {
      num: 2,
      expected: ['1', '2'],
    },
    {
      num: 3,
      expected: ['1', '2', 'Fizz'],
    },
    {
      num: 4,
      expected: ['1', '2', 'Fizz', '4'],
    },
    {
      num: 5,
      expected: ['1', '2', 'Fizz', '4', 'Buzz'],
    },
    {
      num: 6,
      expected: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz'],
    },
  ])('should show fizzBuzz word of $num to $expected', ({ num, expected }) => {
    expect(fizzBuzz(num)).toStrictEqual(expected);
  });
});
