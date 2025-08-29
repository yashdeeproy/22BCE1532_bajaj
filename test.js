const { processDataArray } = require('./utils/dataProcessor');
const userInfo = require('./config/userConfig');

console.log('🧪 Testing BFHL API Logic...\n');

const testCases = [
    {
        name: 'Example A',
        input: ["a", "1", "334", "4", "R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339"
        }
    },
    {
        name: 'Example B',
        input: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2", "4", "92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103"
        }
    },
    {
        name: 'Example C',
        input: ["A", "ABcD", "DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A", "ABCD", "DOE"],
            special_characters: [],
            sum: "0"
        }
    }
];

testCases.forEach((testCase) => {
    console.log(`--- ${testCase.name} ---`);
    console.log('Input:', testCase.input);
    
    const result = processDataArray(testCase.input);
    console.log('Output:', {
        odd_numbers: result.oddNumbers,
        even_numbers: result.evenNumbers,
        alphabets: result.alphabets,
        special_characters: result.specialCharacters,
        sum: result.sum,
        concat_string: result.concatString
    });
    
    console.log('✓ Odd numbers:', JSON.stringify(result.oddNumbers) === JSON.stringify(testCase.expected.odd_numbers) ? 'PASS' : 'FAIL');
    console.log('✓ Even numbers:', JSON.stringify(result.evenNumbers) === JSON.stringify(testCase.expected.even_numbers) ? 'PASS' : 'FAIL');
    console.log('✓ Alphabets:', JSON.stringify(result.alphabets) === JSON.stringify(testCase.expected.alphabets) ? 'PASS' : 'FAIL');
    console.log('✓ Special chars:', JSON.stringify(result.specialCharacters) === JSON.stringify(testCase.expected.special_characters) ? 'PASS' : 'FAIL');
    console.log('✓ Sum:', result.sum === testCase.expected.sum ? 'PASS' : 'FAIL');
    console.log('✓ Concat string:', result.concatString);
    console.log('');
});

console.log('🗓️ Current user_id:', userInfo.getUserId());
console.log('📧 Email:', userInfo.email);
console.log('🎓 Roll number:', userInfo.rollNumber);
console.log('\n✅ All tests completed!');