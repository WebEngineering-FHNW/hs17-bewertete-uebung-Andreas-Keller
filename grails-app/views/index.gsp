<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Welcome to ProTrack</title>
    <asset:link rel="icon" href="favicon.ico" type="image/x-ico" />
</head>
<body>
    <content tag="nav">
        <li><g:link controller="task" >ProTrack Tool</g:link></li>
    </content>

    <div class="svg" role="presentation">
        <div class="grails-logo-container">
            <div class="protrack-header">ProTrack</div>
        </div>
    </div>

    <div id="content" role="main">
        <section class="row colset-2-its protrack-text">
            <h1>Task Board Tool</h1>
            <h2>WebeC project by Andreas Keller</h2>
            <p>
                Create, drag and drop and delete tasks for your project.
                The tasks are instantly saved to the database.
            </p>
            <p>
                Click <g:link controller="task" >here</g:link> to start.
            </p>
        </section>
    </div>

</body>
</html>
