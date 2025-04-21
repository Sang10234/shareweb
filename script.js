function doitab(nutid, divid, lop1, lop2) {
    let div = document.getElementById(divid)
    let nut = document.getElementById(nutid)
    div.classList.toggle('show')
    nut.classList.toggle(lop1)
    nut.classList.toggle(lop2)
}

function tabphu() {
    let cd = this.querySelector('i')
    let dsphu = this.parentElement.nextElementSibling
    if (dsphu) {
        dsphu.classList.toggle('show')
        cd.classList.toggle('fa-chevron-down')
        cd.classList.toggle('fa-chevron-up')
    }
}

document.getElementById('nutlup').addEventListener('click', function () {
    doitab('nutlup', 'tabtk', 'fa-search', 'fa-times')
})

document.getElementById('nutmenu').addEventListener('click', function () {
    doitab('nutmenu', 'tabmenu', 'fa-bars', 'fa-times')
})

document.getElementById('nutnguoidung').addEventListener('click', function () {
    doitab('nutnguoidung', 'dangnhapky', 'fa-user', 'fa-times')
})

document.querySelectorAll('.nutchinh').forEach(function (nut) {
    nut.addEventListener('click', tabphu)
})