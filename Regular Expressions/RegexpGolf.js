/*

For each of the following items, write a regular expression
to test whether any of the given substrings occur in a string.
The regular expression should match only strings containing one of the substrings described.

Do not worry about word boundaries unless explicitly mentioned.
When your expression works, see whether you can make it any smaller.

1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)

*/


// Fill in the regular expressions

// car and cat
verify(/ca[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);

// pop and prop    
verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

// ferret, ferry, and ferrari
verify(/ferr(et|y|ari)/,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

// Any word ending in ious
verify(/ious\b/,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the period"]);

// A word longer than six letters
verify(/\w{7,}/,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words"]);

// A word without the letter e (or E)
verify(/\b[^\We]+\b/i,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
// Ignore unfinished exercises
if (regexp.source == "...") return;
for (let str of yes) if (!regexp.test(str)) {
 console.log(`Failure to match '${str}'`);
}
for (let str of no) if (regexp.test(str)) {
 console.log(`Unexpected match for '${str}'`);
}
}