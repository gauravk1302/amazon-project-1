export function formatCurrency(priceCents){
    return (priceCents/100).toFixed(2);
}

export default formatCurrency;

// now we can import without using the curly bracket and also each file can have only one export default 