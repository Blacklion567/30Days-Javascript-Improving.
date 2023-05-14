/* 
1. Declare a function name _capitalizeArray_.It takes array as a parameter and it returns the - capitalizedarray.
1. Declare a function name _addItem_.It takes an item parameter and it returns an array after adding the item
1. Declare a function name _removeItem_.It takes an index parameter and it returns an array after removing an item
1. Declare a function name _sumOfNumbers_.It takes a number parameter and it adds all the numbers in that range.
1. Declare a function name _sumOfOdds_.It takes a number parameter and it adds all the odd numbers in that - range.
1. Declare a function name _sumOfEven_.It takes a number parameter and it adds all the even numbers in that - range.
1. Declare a function name evensAndOdds.It takes a positive integer as parameter and it counts number of evens and odds in the number.

    ```sh
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
    ```

1. Write a function which takes any number of arguments and return the sum of the arguments

    ```js
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
    ```

1. Writ a function which generates a _randomUserIp_.
1. Write a function which generates a _randomMacAddress_
1. Declare a function name _randomHexaNumberGenerator_.When this function is called it generates a random hexadecimal number.The function return the hexadecimal number.

    ```sh
    console.log(randomHexaNumberGenerator());
    '#ee33df'
    ```

1. Declare a function name _userIdGenerator_.When this function is called it generates seven character id.The function return the id.

    ```sh
    console.log(userIdGenerator());
    41XTDbE
    ```

### Exercises: Level 3

1. Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_.It doesn’t take any parameter but it takes two inputs using prompt().One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```

1. Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```

1. Write a function ** _arrayOfHexaColors_ ** which return any number of hexadecimal colors in an array.
1. Write a function ** _arrayOfRgbColors_ ** which return any number of RGB colors in an array.
1. Write a function ** _convertHexaToRgb_ ** which converts hexa color to rgb and it returns an rgb color.
1. Write a function ** _convertRgbToHexa_ ** which converts rgb to hexa color and it returns an hexa color.
1. Write a function ** _generateColors_ ** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```

1. Call your function _shuffleArray_, it takes an array as a parameter and it returns a shuffled array
1. Call your function _factorial_, it takes a whole number as a parameter and it return a factorial of the number
1. Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
1. Call your function _sum_, it takes any number of arguments and it returns the sum.
1. Write a function called _sumOfArrayItems_, it takes an array parameter and return the sum of all the items.Check if all the array items are number types.If not give return reasonable feedback.
1. Write a function called _average_, it takes an array parameter and returns the average of the items.Check if all the array items are number types.If not give return reasonable feedback.
1. Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of the array and return the array.If the array length is less than five it return 'item not found'.

    ```js
    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    ```

    ```sh
    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    ```

    ```sh
    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    ```

    ```js
    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    ```

    ```sh
      'Not Found'
    ```

1. Write a function called _isPrime_, which checks if a number is prime number.
1. Write a functions which checks if all items are unique in the array.
1. Write a function which checks if all the items of the array are the same data type.
1. JavaScript variable name does not support special characters or symbols except \$ or \_.Write a function ** isValidVariable ** which check if a variable is valid or invalid variable.
1. Write a function which returns array of seven random numbers in a range of 0 - 9. All the numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```

1. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

🎉 CONGRATULATIONS! 🎉

[<< Day 6](../06_Day_Loops/06_day_loops.md) | [Day 8 >>](../08_Day_Objects/08_day_objects.md) */