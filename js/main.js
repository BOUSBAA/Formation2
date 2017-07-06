(function($, window, document, undefined) {

    'use strict';

    $(function() {
        // Cover image
        $('.cover-image').find('img').each(function(i, elem) {
            var width = '100%';
            var height = '100%';

            $(this).css({
                backgroundImage: 'url("' + $(this).attr('src') + '")',
                height: height,
                width: width
            });
            $(this).attr('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
        });
    });

})(jQuery, window, document);