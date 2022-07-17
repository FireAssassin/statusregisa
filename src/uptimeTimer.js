module.exports = function (data, variable) {
    const firstdate = data
    let currentdate = new Date()
    let uptime = currentdate.getTime() - firstdate.getTime()
    var d = uptime / (1000 * 3600 * 24)
    var h = (d - Math.floor(d)) * 24
    var m = (h - Math.floor(h)) * 60
    var s = ((m - Math.floor(m)) * 10000) / 10000 * 60
    var days = Math.floor(d)
    var hours = Math.floor(h)
    var minutes = Math.floor(m)
    var seconds = Math.floor(s)
    switch (variable) {
        case 1:
            return days
            break;
        case 2:
            return hours
            break;
        case 3:
            return minutes
            break;
        case 4:
            return seconds
            break;
    }

}