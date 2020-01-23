let farm = ["cow", "cow", "cow", "pig", "pig", "chicken", "chicken", "chicken", "sheep", "sheep"];

let feet = 0

for (let i = 0; i < farm.length; i++){
    if (farm[i] === "cow") {
        feet = feet + 4
    }
    if (farm[i] === "chicken") {
        feet = feet + 2
    }
    if (farm[i] === "sheep") {
        feet = feet + 4
    }
}

console.log("USABLE FEET", feet)