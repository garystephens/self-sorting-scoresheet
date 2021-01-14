function preventTabbingFromScoreField() {
    $('input.score').on('keydown', function (e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            $(this).blur();
        }
    });
}

function preventChangingSortOrder() {
    $('table.isortope th').prop('onclick', null).off('click');
}

function sortEmptyTable() {
    setTimeout(function () {
        $('table.isortope').isortope('resort');
        setTimeout(function () {
            $('body').addClass('animationOn');
        }, 1000);
    }, 100);
}

$(document).ready(function () {
    $('table.isortope').on('initialized', function () {
        preventTabbingFromScoreField();
        preventChangingSortOrder();
        sortEmptyTable();
    });
});
