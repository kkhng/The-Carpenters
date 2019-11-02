if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var hitButtons = document.getElementsByClassName('hit-btn')
    for (var i = 0; i < hitButtons.length; i++) {
        var button = hitButtons[i]
        button.addEventListener('click', hitClicked)
    }
}

function hitClicked() {
    alert('Sorry :( voting time is over.')
}