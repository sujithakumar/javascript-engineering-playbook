console.log();
console.log('"10" ?? undefined    ', "10" ?? undefined);
console.log('"10" ?? null ', "10" ?? null);

console.log();
console.log('null ?? "10"  ', null ?? "10");
console.log('undefined ?? "10"  ', undefined ?? "10");

console.log();
console.log('null ?? undefined  ', null ?? undefined);
console.log('undefined ?? null  ', undefined ?? null);

console.log();
console.log('0 ?? undefined  ', 0 ?? undefined);
console.log('0 ?? null  ', 0 ?? null);

console.log();
console.log('null ?? 0  ', null ?? 0);
console.log('undefined ?? 0  ', undefined ?? 0);

console.log();
console.log('false ?? undefined  ', false ?? undefined);
console.log('false ?? null  ', false ?? null);

console.log();
console.log('null ?? false  ', null ?? false);
console.log('undefined ?? false  ', undefined ?? false);

console.log();
console.log("Interview question");
console.log('0 ?? 100  ', 0 ?? 100);
console.log('false ?? true', false ?? true);
console.log('"" ?? "Default"', "" ?? "Default");
console.log("Left side value is returned as it is not null/undefined")