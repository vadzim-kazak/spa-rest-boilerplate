/**
 * Created by Kazak_VV on 12.05.2015.
 */

require.config({
    paths: {
        "jquery": "../../libs/jquery/dist/jquery",
        "underscore": "../../libs/underscore/underscore",
        "backbone": "../../libs/backbone/backbone",
        "requirejs": "../../libs/requirejs/require"
    }
});

require(['requirejs','underscore', 'jquery'], function(requirejs, _, $) {

    $.get("/v1/test", function(data, status){
        $('#restResponse').html(data);
    });

});