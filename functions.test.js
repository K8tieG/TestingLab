const { returnTwo, greeting, add, multiply, subtract, divide} = require ('./functions');

// test('returnTwo function should return the number 2', function(){
//     expect([2]).toEqual([2])
// })

// test('greeting function should return hello, James', function(){
//     expect(greeting('James')).toBe('Hello, ${name}')
    
// })

// test('greeting function should return hello, James', function(){
//     expect(greeting()).toBe('Hello, ${name}')
// })

// test('add function should add two numbers',function(){
//     expect(add(1, 2)).toEqual(3)
//     expect(add(5, 9)).toEqual(14)
// })
//challenge 

// test('multiply function should multiply two numbers',function(){
//     expect(multiply(1, 2)).toEqual(2);
    
// })

// test('divide function should divide two numbers',function(){
//     expect(divide(4, 2)).toEqual(2);

// })

// test('subtract function should subtract two numbers',function(){
//     expect(subtract(6, 2)).toEqual(4);
    
// })

//Create Grouping 
// describe('Math functions', function(){
//     test('multiply function should multiply two numbers',function(){
//         expect(multiply(1, 2)).toEqual(2);
        
//     })
//     test('divide function should divide two numbers',function(){
//         expect(divide(4, 2)).toEqual(2);
    
//     })
//     test('subtract function should subtract two numbers',function(){
//         expect(subtract(6, 2)).toEqual(4);
        
//     })
// })


test('add function should add a string and number',function(){
    expect(add('banana',3)).toBe('banana3');
})

test('multiply function should multiply a string and number',function(){
    expect(multiply('banana',3)).toBeNaN();
})

test('subtract function should subtract a string and number',function(){
    expect(subtract('banana',3)).toBeNaN();
})

test('divide function should divide a string and number',function(){
    expect(divide('banana',3)).toBeNaN();
})