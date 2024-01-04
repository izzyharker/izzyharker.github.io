function daysInMonth(m) {
    switch (m) {
        case 0: return 31
        case 1: return 29
        case 2: return 31
        case 3: return 30
        case 4: return 31
        case 5: return 30
        case 6: return 31
        case 7: return 30
        case 8: return 31
        case 9: return 31
        case 10: return 30
        case 11: return 31
    }
}

function updateBars() {
    let date = new Date()

    let month = date.getMonth()
    let day = date.getDate()

    let days_in_month = daysInMonth(month)
    month += 1

    document.getElementById("daymonth-text").textContent = `Day ${day}/${days_in_month}`
    document.getElementById("monthyear-text").textContent = `Month ${month}/12`

    document.getElementById("daymonth-inner").style.width = `${100 * day/days_in_month}%`
    document.getElementById("monthyear-inner").style.width = `${100 * month/12}%`
    let t = setTimeout(updateBars, 60000)
}

updateBars()