export function numberWithCommas(x) {
    if (x === undefined || x === null) return '';
    x = x.toString();
    let lastThree = x.substring(x.length - 3);
    let otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== '') {
        lastThree = ',' + lastThree;
        otherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    }
    return `₹ ${otherNumbers}${lastThree}`;
}
