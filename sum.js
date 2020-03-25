var salaries = {
    john: 100,
    Ann: 160,
    Pete: 130
};

var sum = 0;
for (var key in salaries) {
    sum += salaries[key];
}
console.log(sum);