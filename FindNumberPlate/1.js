var checkHanoiLicensePlate = function (LicensePlate) {
    var arr = ['29', '30', '31', '32', '33', '40'];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        if (LicensePlate.startsWith(value)) {
            return true;
        }
    }
    return false;
};
var licensePlateList = ['30H-106.86', '18NA-008.53', '29T2-035.27', '18H1-662.31'];
var HanoiPlateList = [];
for (var i = 0; i < licensePlateList.length; i++) {
    if (checkHanoiLicensePlate(licensePlateList[i])) {
        HanoiPlateList.push(licensePlateList[i]);
    }
}
console.log("Biển Hà Nội: " + HanoiPlateList);
