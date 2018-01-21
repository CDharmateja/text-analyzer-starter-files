$(function() {
    $('.js-form').submit(function(event) {
        event.preventDefault();
        var userTextElement = $(this).find('#user-text');
        var str = userTextElement.val();
        str = str.toLowerCase();
        var words = str.replace( /\n/g, " " ).split( " " )
        var noOfWords = words.length
        var distinct = []
        var count = 0
        var total = 0
        for (var i = 0; i < words.length; i++) {
            if (!(distinct.includes(words[i]))) {
                count++;
                distinct.push(words[i]);
            }
        }
        var avgLength = str.length / noOfWords;
        $('dl').removeClass("hidden");
        $('.js-count').text(noOfWords);
        $('.js-unique-count').text(count);
        $('.js-avg-length').text(avgLength);
    });
});