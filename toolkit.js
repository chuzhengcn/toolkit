var Toolkit = {}

(function () {
    // get url args -- clinet
    function get_query_str_args(args_name) {
        var qs = location.search.length > 0 ? location.search.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;

        for (i = 0; i < len; i++) {
            item = items[i].split("=")
            name = decodeURIComponent(item[0])
            value = decodeURIComponent(item[1])

            if (name.length) {
                args[name] = value;
            }
        }

        if (typeof args_name === 'undefined') {
            return args
        }

        return args[args_name] 
    }

    Toolkit.get_query_str_args = get_query_str_args

    // select random num in range -- both client and server
    function select_from(lower_val, upper_val) {
        var choices = upper_val - lower_val + 1;

        return Math.floor(Math.random() * choices + lower_val)
    }

    Toolkit.select_from = select_from

    // -- server
    function is_image(file_type) {
        return /image/.test(file_type)
    }

    Toolkit.is_image = is_image
})