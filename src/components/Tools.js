export function copyToClipboard(obj) {
    navigator.clipboard
        .writeText(obj)
        .then(() => {
            console.log("Pass in buffer")
        })
        .catch((err) => {
            console.log("Something went wrong", err)
        })
}
export function getRandomNumber(max = 99) {
    let result = Math.round(Math.random() * max)
    if (isNaN(result)) {
        this.getRandomNumber(max)
    }
    return result
}
export function getRandomNumberFromRange(min = 1, max = 99) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}