function moreInputInit(inputs_div_id, input_html) {
    document.querySelector('#' + inputs_div_id + ' .addmore-button').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#' + inputs_div_id).insertAdjacentHTML('beforeend', '<span class="addmore-span">' + input_html + '</span>');
    });

    document.querySelector('#'+inputs_div_id).addEventListener('click', function(e) {
        var targetElement = e.target || e.srcElement;
        if (!targetElement.classList.contains('addmore-remove-button')) return;
        e.preventDefault();
        targetElement.parentElement.remove();
    });
}
