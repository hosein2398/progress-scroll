(function (window) {
            ProgressScroll = function (args) {

                var the_scroll = document.createElement('div'); // default tag 
                // adding some styels to elemet
                if (args.height) {
                    the_scroll.style.height = args.height;
                } else {
                    the_scroll.style.height = '10px';
                }
                var element_bound = document.querySelector(args.element).getBoundingClientRect();
                if (element_bound.top < 0) {
                    the_scroll.style.width = '10px';
                }
                the_scroll.style.position = 'fixed';
                the_scroll.style.top = 0;
                the_scroll.style.left = 0;
                if (args.color) {
                    the_scroll.style.background = args.color;
                } else { 
                    the_scroll.style.background = "tomato";
                }
                var body = document.body;
                body.insertBefore(the_scroll, body.firstChild); // inserting the div as first child of the body
                var previous_scroll_top;
                if (args.element) {
                    var the_element = document.querySelector(args.element);
                    var the_element_height = the_element.clientHeight;
                }
                var ratio;
                if (args.beforeRun) {
                    args.beforeRun();
                }
                var el_top_count = 0;
                var element_start_top;
                window.addEventListener("scroll", function () {
                    the_element = document.querySelector(args.element);
                    the_element_height = the_element.clientHeight;
                    element_bound = document.querySelector(args.element).getBoundingClientRect();
                    if (element_bound.top < 0) {
                        if (el_top_count < 1) {
                            element_start_top = document.body.scrollTop - Math.abs(element_bound.top);
                        }
                        console.log(-element_bound.top)
                        el_top_count++;
                        if (args.element) {
                            var body_scroll_top = document.body.scrollTop - element_start_top;
                            ratio = parseInt((body_scroll_top / the_element_height) * 100);
                        } else {
                            ratio = parseInt((body_scroll_top / document.body.clientHeight) * 100);
                        }
                        the_scroll.style.display = 'block';
                        if (document.body.scrollTop < previous_scroll_top) {
                            the_scroll.style.width = ratio + '%';
                        } else {
                            the_scroll.style.width = ratio + '%';
                        }
                    } else {
                        the_scroll.style.display = 'none';
                    }
                    if (args.onCompelete) {
                        if (ratio + 20 >= 100) {
                            args.onCompelete();
                        }
                    }
                    previous_scroll_top = document.body.scrollTop;
                });
            }
        })(window);