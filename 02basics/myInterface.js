"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var malay = {
    dbId: 1,
    email: "ms@m.com",
    userId: 123,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return "Coupon code is: ".concat(name, " and giving us ").concat(off, "% off");
    },
    githubToken: "MALAY123GIHUB"
};
// it is like Type but different at some aspects,
console.log(malay.getCoupon("MAAAAL50", 50));
var malayAdmin = {
    dbId: 1,
    email: "ms@m.com",
    userId: 123,
    startTrial: function () {
        return "Trial started";
    },
    getCoupon: function (name, off) {
        return "Coupon code is: ".concat(name, " and giving us ").concat(off, "% off");
    },
    githubToken: "MALAY123GIHUB",
    role: "admin",
    adminId: 12
};
