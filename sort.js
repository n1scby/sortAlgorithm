"use strict";
var numbers = [421, 28, 232, 5, 166, 448];
var sortedNumbers = [];
var x = 0;



    var outerLoop = function outerLoop() {
        do {

            innerLoop();

        } while (x < numbers.length);
    }


    var innerLoop = function innerLoop() {

        for (var i = 0; i < numbers.length; i++) {

            if (numbers[x] > numbers[i + 1]) {
                x++;
                break;
            } else {
                if (i === numbers.length - 1) {
                    sortedNumbers.push(numbers[x]);
                    numbers.splice(x, 1);
                    x = 0;
                }
            }
        }
    }

    outerLoop();
    console.log(sortedNumbers);