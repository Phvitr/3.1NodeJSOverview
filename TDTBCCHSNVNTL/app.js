let arr = [{
    name: "Ha",
    gender: 'female',
    point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];

let maleSum = 0;
let count = 0;
let maleAvg;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === 'male') {
        maleSum += arr[i].point;
        count++;
    }
    maleAvg = maleSum / count;
}
console.log("Điểm trung bình của nam là: " + maleAvg);

