import React, { useState } from 'react';

const Problems = () => {
  const problems = [
    {
        id: 1,
        title: "Sum of Two Numbers",
        description: "Write a function that takes two numbers as arguments and returns their sum.",
        hint: "This is a basic arithmetic operation. You can simply use the + operator.",
        solution: "function sumOfTwoNumbers(a, b) { return a + b; }"
    },
    {
      "id": 2,
      "title": "Check Prime Number",
      "description": "Write a function to check if a given number is prime or not.",
      "hint": "A prime number is a number greater than 1 with no divisors other than 1 and itself.",
      "solution": "function isPrime(num) { if (num <= 1) return false; if (num % 2 === 0 || num % 3 === 0) return false; for (let i = 5; i * i <= num; i += 6) { if (num % i === 0 || num % (i + 2) === 0) return false; } return true; }"
  },
  {
      "id": 3,
      "title": "Palindrome String",
      "description": "Write a function to check if a string is a palindrome. A palindrome reads the same backward as forward.",
      "hint": "Consider using string manipulation techniques like reversing the string and comparing it to the original.",
      "solution": "function isPalindrome(str) { const reversed = str.split('').reverse().join(''); return str === reversed; }"
  },
  {
      "id": 4,
      "title": "Find the Largest Number in an Array",
      "description": "Write a function to find the largest number in a given array of numbers.",
      "hint": "You might use the Math.max method combined with the spread operator to simplify finding the maximum.",
      "solution": "function findLargestNumber(numbers) { return Math.max(...numbers); }"
  },
  {
      "id": 5,
      "title": "Fibonacci Sequence",
      "description": "Write a function that returns the nth element in the Fibonacci sequence.",
      "hint": "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.",
      "solution": "function fibonacci(n) { const fib = [0, 1]; for (let i = 2; i <= n; i++) { fib[i] = fib[i - 1] + fib[i - 2]; } return fib[n]; }"
  }
  ];
  

    
  const [hintsShown, setHintsShown] = useState(Array(problems.length).fill(false));
  const [solutionsShown, setSolutionsShown] = useState(Array(problems.length).fill(false));

  const toggleHint = (index) => {
    const updatedHintsShown = [...hintsShown];
    updatedHintsShown[index] = !updatedHintsShown[index];
    setHintsShown(updatedHintsShown);
  };

  const toggleSolution = (index) => {
    const updatedSolutionsShown = [...solutionsShown];
    updatedSolutionsShown[index] = !updatedSolutionsShown[index];
    setSolutionsShown(updatedSolutionsShown);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
      {problems.map((problem, index) => (
        <div key={problem.id} style={{ padding: '20px', width: '100%', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '10px' }}>
          <h1>{problem.title}</h1>
          <p>{problem.description}</p>
          <button onClick={() => toggleHint(index)} style={{ margin: '10px 0', padding: '5px 20px' }}>
            {hintsShown[index] ? 'Hide Hint' : 'Show Hint'}
          </button>
          {hintsShown[index] && <p style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>{problem.hint}</p>}
          <button onClick={() => toggleSolution(index)} style={{ margin: '10px 0', padding: '5px 20px' }}>
            {solutionsShown[index] ? 'Hide Solution' : 'Show Solution'}
          </button>
          {solutionsShown[index] && <pre style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>{problem.solution}</pre>}
        </div>
      ))}
    </div>
  );
};


export default Problems;
