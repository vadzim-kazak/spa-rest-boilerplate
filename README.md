# spa-rest-boilerplate
This boilerplate intends to help with a quick project startup.</br> 
<b>spa-rest-boilerplate</b> consists of two subprojects:</br>
<b>rest</b> - Java REST services module based on Spring framework.</br>
<b>spa</b> - JavaScript single page application module. By default it is based on Backbone & RequireJS libraries. But it can be easily updated with your own favorites framework - all dependencies are managed by <b>bower</b> configuration. Also out of the box spa module provides <b>gulp</b> building support via <a href="https://github.com/srs/gradle-gulp-plugin">com.moowork.gulp</a> gradle plugin.

<h2>How-To</h2>

<ol>
<li>Download boilerplate via <i>"git clone https://github.com/vadzim-kazak/spa-rest-boilerplate.git"</i> command.</li>
<li>Starup application in the embedded Jetty application container via <i>"gradle appRun"</i> commad from spa-rest-boilerplate folder. This will trigger downloading and setup of all required dependencies.</li>
</ol>

