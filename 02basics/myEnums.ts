enum SeatChoice {
    AISLE = "aisle", // this is defaulted to 0, can assign custum values like AISLE = 10, and next will be incremented by one, if not defined in similar fashion, we can add TEXT as well like AISLE = "aisle", and mix and match as well
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const msSeat = SeatChoice.AISLE;
// here if we add const before enum then we generate less lines of code in js equivalent


export{}