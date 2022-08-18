export default function({
    weight,
    height,
}) {
    function calculateIMC(weight, height) {
        return (weight / ((height / 100) ** 2))
    }
    
    function isNumber(number) {
        return !(isNaN(number) || number === "")
    }
    return {
        calculateIMC,
        isNumber
    }
}

