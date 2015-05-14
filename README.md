# spa-rest-boilerplate
This boilerplate intends to help with a quick project startup.</br> 
<b>spa-rest-boilerplate</b> consists of two subprojects:</br>
<b>rest</b> - Java REST services module based on Spring framework.</br>
<b>spa</b> - JavaScript single page application module. By default it is based on Backbone & RequireJS libraries. But it can be easily updated with your own favorites framework - all dependencies are managed by <b>bower</b> configuration. Also out of the box spa module provides <b>gulp</b> building support via <a href="https://github.com/srs/gradle-gulp-plugin">com.moowork.gulp</a> gradle plugin.

<h2>How-To</h2>

<ol>
<li>Download boilerplate using <i>"git clone https://github.com/vadzim-kazak/spa-rest-boilerplate.git"</i> command.</li>
<li>Startup application in the embedded Jetty application container using <i>"gradle appRun"</i> commad from spa-rest-boilerplate folder. This will trigger downloading and setup of all required dependencies.</li>
</ol>

<h5>REST module customization</h5>
<ul>
  <li>Java version 1.7 is used by default. Please update <i>java.version</i> property in 'spa-rest-boilerplate/gradle.properties' file if you need something else.</li>
  <li>Out of the box package for java sources is <i>com.company.project..</i>. Don't forget to update Spring java config  <i>rest\src\main\java\com\company\project\config\ApplicationInitializer.java</i> & <i>rest\src\main\java\com\company\project\config\ApplicationConfig.java</i> by new package value if you proceed with Spring.</li>
</ul>

<h5>SPA module customization</h5>
<ul>
  <li>All dependencies to js frameworks & libraries are managed via Bower package manager. Please update <i>spa-rest-boilerplate\spa\bower.json</i> configuration file during application development.</br> Internally bower is triggered via the following chain: <i>gradle->gradle-gulp-pluign->gulp->gulp-bower-plugin->bower.</i></br> So, if you need to download new bower package please use the following commands:<i>gradle gulp_init</i> or <i>gulp init</i> (in case if you have external globally installed gulp).</br> All downloaded packages bower puts into <i>spa-rest-boilerplate\spa\libs</i> folder.</li>
  
</ul>
