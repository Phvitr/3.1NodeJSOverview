let checkHanoiLicensePlate = (LicensePlate) => {
    let arr = ['29', '30', '31', '32', '33', '40'];
    for (const value of arr) {
        if (LicensePlate.startsWith(value)) {
            return true;
        }
    }
    return false;
}

let licensePlateList = ['30H-106.86','18NA-008.53','29T2-035.27','18H1-662.31'];


let HanoiPlateList = [];

for (let i = 0; i < licensePlateList.length; i++) {
    if (checkHanoiLicensePlate(licensePlateList[i])) {
        HanoiPlateList.push(licensePlateList[i]);
    }
}
console.log("Biển Hà Nội: " + HanoiPlateList)