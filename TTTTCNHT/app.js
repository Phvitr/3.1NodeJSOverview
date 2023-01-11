let arr = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

let date = new Date ();

let day = date.getDay();
for (let i = 0; i < arr.length; i++) {
    if (i === day) {
        console.log(arr[i]);
    }
}

