function moreInputInit(inputs_div_id, input_html, max_entries) {
    if (!max_entries) max_entries = 64;
    var i = document.getElementById(inputs_div_id).getElementsByClassName('addmore-span').length;
    document.querySelector('#' + inputs_div_id + ' .addmore-button').addEventListener('click', function (e) {
        e.preventDefault();
        if ( i < max_entries ) {
            document.querySelector('#' + inputs_div_id).insertAdjacentHTML('beforeend', '<span class="addmore-span">' + input_html + '</span>');
            i++;
        }
    });

    document.querySelector('#'+inputs_div_id).addEventListener('click', function(e) {
        var targetElement = e.target || e.srcElement;
        if (!targetElement.classList.contains('addmore-remove-button')) return;
        e.preventDefault();
        targetElement.parentElement.remove();
        i--;
    });
}
