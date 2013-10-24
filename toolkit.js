var Toolkit = {};

// get url args -- clinet
Toolkit.get_query_str_args = function (args_name) {
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

// select random num in range -- both client and server
Toolkit.select_from = function (lower_val, upper_val) {
    var choices = upper_val - lower_val + 1;

    return Math.floor(Math.random() * choices + lower_val)
}

// -- server
Toolkit.is_image = function (file_type) {
    return /image/.test(file_type)
}

// -- both
Toolkit.is_pair = function (value1, value2) {
    if (typeof value1 === 'undefined' && typeof value2 !== 'undefined') {
        return false
    }

    if (typeof value1 !== 'undefined' && typeof value2 === 'undefined') {
        return false
    }

    return true
}

exports.tool = Toolkit;