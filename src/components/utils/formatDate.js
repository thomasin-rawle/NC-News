
const formatDate = (rawDate) => {
const dateInMS = new Date(Date.parse(rawDate));

let date = ''
const olderThanADay = Date.now()-86400000
if (dateInMS < olderThanADay) {
    date = dateInMS.toLocaleDateString();
}
else {
    const now = new Date(Date.now())
    const n = Math.floor(Math.abs(now - dateInMS) / 36e5);
    date = n === 1 ? `${n} hour ago` : `${n} hours ago`
}
return date

    
}

module.exports = formatDate