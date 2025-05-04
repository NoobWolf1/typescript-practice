interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //startTrial: () => string,
  startTrial(): string;
  getCoupon(couponName: string, value: number): number | string;
}

const malay: User = {
  dbId: 1,
  email: "ms@m.com",
  userId: 123,
  startTrial: () => {
    return "Trial started";
  },
  getCoupon: (name: "MALAY10", off: 10) => {
    return `Coupon code is: ${name} and giving us ${off}% off`;
  },
  githubToken: "MALAY123GIHUB"
};

// it is like Type but different at some aspects,

console.log(malay.getCoupon("MAAAAL50", 50));

// interfaces can be reopened ie., we can add more values to them, unlike types

interface User {
    githubToken: string,
}

// we also get inheritence here

interface Admin extends User {
    adminId: number,
    role: "admin" | "ta" | "learner"
}

const malayAdmin: Admin = {
    dbId: 1,
    email: "ms@m.com",
    userId: 123,
    startTrial: () => {
      return "Trial started";
    },
    getCoupon: (name: "MALAY10", off: 10) => {
      return `Coupon code is: ${name} and giving us ${off}% off`;
    },
    githubToken: "MALAY123GIHUB",
    role: "admin",
    adminId: 12
  };


export{}