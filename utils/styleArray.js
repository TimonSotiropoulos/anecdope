

export const styleArray = (styleArray) => {
    var className = "";
    var arrayLen = styleArray.length;
    styleArray.forEach((value, index) => {
        if (index === (arrayLen-1)) {
            className += value;
        } else {
            className += (value + " ");
        }
    });
    return className
}
