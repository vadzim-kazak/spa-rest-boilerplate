/**
 * Created by Kazak_VV on 12.05.2015.
 */

var $ = require('./libs/jquery/dist/jquery.js');

$.get('/v1/test').done(function(response) {
    $('#restResponse').html(response);
});





