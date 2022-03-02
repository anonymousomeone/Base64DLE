// hehehehaw (grrr)

function randomStr() {
    var stuff = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var len = Math.floor(Math.random() * 20)
    while (len < 10) len = Math.floor(Math.random() * 20)

    var res = []
    for (var i = 0; i < len; i++) {
        res.push(stuff[Math.floor(Math.random() * stuff.length)])
    }
    return res.join('')
}

function asdf(answer, guess) {
    var answer = answer.split('')

    var arr = []

    for (var i = 0; i < guess.length; i++) {
        if (answer[i] == guess[i]) {
            arr.push('correct')
        } else if (answer[i] == undefined) {
            arr.push('over')
        } else if (answer.includes(guess[i])) {
            arr.push('present')
        } else {
            arr.push('absent')
        }
    }
    return arr
}

function wordle(arr, guess, a) {
    var output = document.getElementById('output')

    var div = document.createElement('div')
    div.id = `attempt-${a}`

    for (var i = 0; i < guess.length; i++) {
        var tile = document.createElement('div')
        tile.classList = 'tile '

        tile.classList.add(arr[i])
        if (guess[i] == undefined) tile.innerHTML = '   '
        else tile.innerHTML = guess[i]

        div.appendChild(tile)
    }
    output.appendChild(div)
}

function check(answer, attempt) {
    answer = btoa(answer)
    var guess = btoa(document.getElementById('input').value).split('')

    var tries = document.getElementById('tries')
    tries.textContent = `Tries: ${attempt}`

    wordle(asdf(answer, guess), guess, attempt)

    var won = true
    for (var i = 0; i < answer.length; i++) {
        if (answer[i] != guess[i]) {
            won = false
        }
    }

    if (won) {
        document.getElementById('win').style.display = 'block'
    }
}