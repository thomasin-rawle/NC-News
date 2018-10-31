
const formatDate = (rawDate) => {
const dateInMS = new Date(Date.parse(rawDate));
let date = ''
const olderThanADay = Date.now()-86400000
if (dateInMS < olderThanADay) {
    date = dateInMS.toLocaleDateString();
}
else {
    date = dateInMS.toLocaleTimeString().slice(0, -3)
}
return date

    
}

module.exports = formatDate