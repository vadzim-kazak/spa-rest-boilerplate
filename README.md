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

Also the following gradle commands can be usefull:</br>
<ul>
  REST module:</br>
  <li><i>gradle aRu</i> - REST services startup in the embedded Jetty container with auto redeployment of changed source codes.</li>
  SPA module:
  <li><i>gradle aRu</i> - SPA module stuartup in the embedded Jetty container in dev mode. All changes into <i>spa-rest-boilerplate\spa\app</i> folder will be available in browser via refresh.</li>
  <li><i>gradle dAR</i> - SPA module startup in the embedded Jetty container in PROD mode. All web resources are going to be processed by r.js optimizer.</li>
</ul>

<h5>REST module customization</h5>
<ul>
  <li>Java version 1.7 is used by default. Please update <i>java.version</i> property in 'spa-rest-boilerplate/gradle.properties' file if you need something else.</li>
  <li>Out of the box package for java sources is <i>com.company.project..</i>. Don't forget to update Spring java config  <i>rest\src\main\java\com\company\project\config\ApplicationInitializer.java</i> & <i>rest\src\main\java\com\company\project\config\ApplicationConfig.java</i> by new package value if you proceed with Spring.</li>
</ul>

<h5>SPA module customization</h5>
<ul>
  <li>All dependencies to js frameworks & libraries are managed via Bower package manager. Please update <i>spa-rest-boilerplate\spa\bower.json</i> configuration file during application development.</br> Internally bower is triggered via the following chain: <i>gradle->gradle-gulp-pluign->gulp->gulp-bower-plugin->bower.</i></br> All downloaded packages bower puts into <i>spa-rest-boilerplate\spa\libs</i> folder.</li>
  <li>In order to enhance gulp behavior please update <i>spa-rest-boilerplate\spa\gulpfile.js</i> config file. Out og the box it provides four gulp tasks:</br>
  <ul>
    <li><i>init</i> - bower invocation task</li>
    <li><i>optimization</i> - processing & optimization of js & css files using requiresjs r.js optimizer. Result is stored in <i>spa-rest-boilerplate\spa\dist\app</i> folder.</li>
    <li><i>html</i> - html files processing task. Replace links to css & js files using <a href="https://github.com/Wildhoney/gulp-processhtml">gulp-processhtml</a> plugin.</li>
    <li><i>build</i> - aggregation task for processing of all web resources.</li>
  </ul>
  
  Please udpate <i>spa-rest-boilerplate\spa\package.json</i> file by any required gulp dependency .</br>
  Any gulp task can be invoked directly from gradle using the following templae:</br>
  <i>gradle gulp_&lt;gulp task name&gt;</i></br>
  or directly via</br>
  <i>gulp &lt;task_name&gt;</i> if you have globally installed gulp distributive.
  </li>
</ul>

