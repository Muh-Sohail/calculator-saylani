function getresult (num) {
     var res = document.getElementById('result')
     res.value += num
}

function getclear () {
    var res = document.getElementById('result')
    res.value = ''
}

function getans () {
    var res = document.getElementById('result')
    res.value = eval(res.value)
}