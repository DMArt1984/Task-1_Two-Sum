'use strict';

console.log('Task 1');

// https://leetcode.com/problems/two-sum/
// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
//  Input: nums = [2, 7, 11, 15], target = 9
//  Output: [0, 1]
//  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
//  Input: nums = [3, 2, 4], target = 6
//  Output: [1, 2]

// Example 3:
//  Input: nums = [3, 3], target = 6
//  Output: [0, 1]

var TwoSum = function (nums, target) {
    for (let a = 0; a < nums.length - 1; a++) {
        for (let i = 0; i < nums.length; i++) {
            if (a != i) {
                if (nums[a] + nums[i] == target) {
                    return [a, i];
                }
            }
        }
    }
    return [];
};

console.log(TwoSum([3], 1));
console.log(TwoSum([2, 7, 11, 15], 18));
console.log(TwoSum([3, 2, 3], 6));


// wait key...
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
