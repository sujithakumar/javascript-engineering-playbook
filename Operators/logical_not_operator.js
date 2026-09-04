let result = 0 / 0;

console.log("result of 0/0 =    ", result);

console.log("");
console.log("LOGICAL NOT");
console.log("!true =     ", !true);
console.log("!false =    ", !false);

console.log("");
console.log("LOGICAL NOT with 0 & 1");
console.log("!0 =     ", !0);
console.log("!1 =     ", !1);

console.log("");
console.log("LOGICAL NOT with null");
console.log("!null =     ", !null);

console.log("");
console.log("LOGICAL NOT with undefined");
console.log("!undefined =     ", !undefined);

console.log("");
console.log("LOGICAL NOT with string");
console.log("!\"hello\" =     ", !"hello");
console.log("!\"true\" =      ", !"true");
console.log("!\"false\" =     ", !"false");
console.log("!\"0\" =         ", !"0");
console.log("!\"1\" =         ", !"1");

console.log("");
console.log("LOGICAL NOT with Empty string");
console.log("!\"\" =     ", !"");

console.log("");
console.log("LOGICAL NOT with number");
console.log("!25 =          ", !25);
console.log("!-25 =         ", !-25);
console.log("!1 =           ", !1);
console.log("!0.5 =         ", !0.5);
console.log("!0 =           ", !0);

console.log("");
console.log("LOGICAL NOT with NaN");
console.log("!result =      ", !result);
console.log("!NaN =         ", !NaN);

console.log("");
console.log("LOGICAL NOT with Infinity");
console.log("!Infinity =    ", !Infinity);
console.log("!-Infinity =   ", !-Infinity);

console.log("");
console.log("LOGICAL NOT with Arrays");
console.log("![] =           ", ![]);
console.log("![1, 2, 3] =    ", ![1, 2, 3]);

console.log("");
console.log("LOGICAL NOT with Objects");

console.log("!{} =           ", !{});
console.log("!{name: \"John\"} = ", !{name: "John"});

console.log("");
console.log("LOGICAL NOT with Boolean-like strings");
console.log("!\"false\" =     ", !"false");
console.log("!\"true\" =      ", !"true");
console.log("!\"null\" =      ", !"null");
console.log("!\"undefined\" = ", !"undefined");

console.log("");
console.log("LOGICAL NOT Chaining");
console.log("!!true =        ", !!true);
console.log("!!false =       ", !!false);

console.log("");
console.log("!!0 =            ", !!0);
console.log("!!1 =            ", !!1);

console.log("");
console.log("!!null =         ", !!null);
console.log("!!undefined =    ", !!undefined);

console.log("");
console.log("!!\"hello\" =      ", !!"hello");
console.log("!!\"false\" =      ", !!"false");
console.log("!!\"\" =           ", !!"");

console.log("");
console.log("!!25 =            ", !!25);
console.log("!!-25 =           ", !!-25);
console.log("!!NaN =           ", !!NaN);

console.log("");
console.log("TRIPLE NOT");
console.log("!!!true =        ", !!!true);
console.log("!!!false =       ", !!!false);
console.log("!!!0 =           ", !!!0);
console.log("!!!1 =           ", !!!1);
console.log("!!!\"hello\" =     ", !!!"hello");
console.log("!!!\"\" =          ", !!!"");

console.log("");
console.log("LOGICAL NOT with different falsy values");
console.log("!false =         ", !false);
console.log("!0 =             ", !0);
console.log("!null =          ", !null);
console.log("!undefined =     ", !undefined);
console.log("!NaN =           ", !NaN);
console.log("!\"\" =            ", !"");

console.log("");
console.log("LOGICAL NOT with different truthy values");
console.log("!true =          ", !true);
console.log("!1 =             ", !1);
console.log("!25 =            ", !25);
console.log("!-25 =           ", !-25);
console.log("!\"hello\" =       ", !"hello");
console.log("!\"false\" =       ", !"false");
console.log("![] =            ", ![]);
console.log("!{} =            ", !{});