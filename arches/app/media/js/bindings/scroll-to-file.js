define([
    'jquery',
    'knockout'
], function($, ko) {
    ko.bindingHandlers.scrollToFile = {
        update: function(element, valueAccessor, allBindings) {
            var _value = valueAccessor();
            var _valueUnwrapped = ko.unwrap(_value);
            var container = $('html, body');
            if (allBindings().container) {
                container = $(allBindings().container);
            }
            if (_valueUnwrapped) {
                var target = $(element);
                var top = $(window).height();
                var containerTop = $(container).offset().top;
                var bottom = $(target).offset().top + $(target).outerHeight();
                if (bottom > top || bottom > containerTop) {
                    container.stop().animate({
                        scrollTop: $(target).offset().top - container.offset().top + container.scrollTop() - 50
                    }, 10);
                }
            }
        }
    };

    return ko.bindingHandlers.scrollToFile;
});
