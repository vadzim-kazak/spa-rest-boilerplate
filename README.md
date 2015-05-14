# spa-rest-boilerplate
This boilerplate is intended to help with a quick project startup.<br/> 

<b>spa-rest-boilerplate</b> consists of two subprojects:<br/>
<ul>
<li><b>spa</b> - JavaScript single page application module. By default it is based on Backbone & RequireJS libraries. But it can be easily updated with your own favorites framework - all dependencies are managed by <b>bower</b> configuration.<br/> Also out of the box spa module provides <b>gulp</b> building support via <a href="https://github.com/srs/gradle-gulp-plugin">com.moowork.gulp</a> gradle plugin.</li>
<li><b>rest</b> - Java REST services module based on Spring framework.</li>
</ul>

<h2>How-To</h2>

<ol>
<li>Download boilerplate using <i>"git clone https://github.com/vadzim-kazak/spa-rest-boilerplate.git"</i> command.</li>
<li>Run application in the embedded Jetty application container using <i>gradle appRun</i> command from <i>spa-rest-boilerplate</i> folder. This will trigger download and setup of all required dependencies.<br/>
App will be available by the following link: <i>http://localhost:8080/</i>
</li>
</ol>

Also the following gradle commands can be useful:<br/>
  REST module:
  <ul>
  <li><i>gradle appRun</i> - REST services startup in the embedded Jetty container with auto redeployment of changed source code. Service will be available by the following link: <i>http://localhost:8080/v1/test</i>
  </li>
  </ul>
  SPA module:
  <ul>
  <li><i>gradle appRun</i> - SPA module startup in the embedded Jetty container in development mode. All changes in the <i>spa-rest-boilerplate/spa/app</i> folder will be available in browser via refresh.</li>
  <li><i>gradle distAppRun</i> - SPA module startup in the embedded Jetty container in production mode. All web resources are going to be processed by r.js optimizer.</li>
  In both cases app will be available by the following link: <i>http://localhost:8080/app</i>
  </ul>

<h4>SPA module customization</h4>
<ul>
  <li>All dependencies on js frameworks & libraries are managed via bower package manager. Please update <i>spa-rest-boilerplate/spa/bower.json</i> configuration file if you need new dependencies.</br> Internally bower is triggered via the following chain: <i>gradle->gradle-gulp-pluign->gulp->gulp-bower-plugin->bower.</i></br> Bower puts all downloaded packages into <i>spa-rest-boilerplate/spa/libs</i> folder.</li></br>
  <li>In order to customize gulp behavior please update <i>spa-rest-boilerplate/spa/gulpfile.js</i> config file. It provides the following gulp tasks out of the box:</br>
  <ul>
    <li><i>init</i> - bower invocation for downloading dependencies.</li>
    <li><i>optimization</i> - processing js & css files using r.js optimizer. Result is stored in <i>spa-rest-boilerplate/spa/dist/app</i> folder.</li>
    <li><i>html</i> - processing html files. Replaces links to css & js files using <a href="https://github.com/Wildhoney/gulp-processhtml">gulp-processhtml</a> plugin.</li>
    <li><i>build</i> - full build which performs all tasks above.</li>
  </ul>
  
  Please update <i>spa-rest-boilerplate/spa/package.json</i> file with any required gulp dependency .<br/>
  Any gulp task can be invoked directly from gradle using <i>gradle gulp_&lt;gulp task name&gt;</i> template or directly via <i>gulp &lt;task_name&gt;</i> if you have globally installed gulp distributive.
  </li>
</ul>

<h4>REST module customization</h4>
<ul>
  <li>Java version 1.7 is used by default. Please update <i>java.version</i> property in the <i>spa-rest-boilerplate/gradle.properties</i> file if you need another version.</li>
  <li>Out of the box package for java sources is <i>com.company.project</i>. Don't forget to update Spring java config  <i>rest\src\main\java\com\company\project\config\ApplicationInitializer.java</i> & <i>rest\src\main\java\com\company\project\config\ApplicationConfig.java</i> files with new package value.</li>
</ul>
