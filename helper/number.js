module.exports.commad = (x) => x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0
