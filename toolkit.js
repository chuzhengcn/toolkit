(function() {
    var toolkit = {}

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

    toolkit.get_query_str_args = get_query_str_args

    // -client
    function add_url_param(url, name, value) {
        url += (url.indexOf("?") === -1 ? "?" : "&" )
        url += encodeURIComponent(name) + '=' + encodeURIComponent(value)
        return url
    }

    toolkit.add_url_param = add_url_param

    // select random num in range -- both client and server
    function select_from(lower_val, upper_val) {
        var choices = upper_val - lower_val + 1;

        return Math.floor(Math.random() * choices + lower_val)
    }

    exports.select_from = select_from

    // -- server
    function is_image(file_type) {
        return /image/.test(file_type)
    }

    toolkit.is_image = is_image

    // -- both
    function is_pair(value1, value2) {
        if (typeof value1 === 'undefined' && typeof value2 !== 'undefined') {
            return false
        }

        if (typeof value1 !== 'undefined' && typeof value2 === 'undefined') {
            return false
        }

        return true
    }

    toolkit.is_pair = is_pair

    function exports_both_server_client(this_module, client_name) {
        // in server environment
        if (typeof module === 'object' && typeof process === 'object') {
            module.exports = this_module;
        } else {
            // is client envionment
            global = global || {}
            global[client_name] = this_module;
        }
    }

    toolkit.exports_both_server_client = exports_both_server_client

    // exports
    exports_both_server_client(toolkit, 'tool')

})();





