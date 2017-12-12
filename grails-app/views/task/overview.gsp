<html>
<head>
    <meta name="layout" content="main">
    <title>Protrack</title>
    <asset:javascript src="require.js"></asset:javascript>
    <asset:javascript src="protrack.js"></asset:javascript>
</head>
<body>
    <h1>Protrack</h1>
    <div class="tasklist">
        <h2>Backlog</h2>
        <ul id="Backlog" ondrop="drop(event)" ondragover="allowDrop(event)">
            <g:each var="task" in="${backlog}">
                <li draggable="true" ondragstart="drag(event)" id="${task.id}">
                    <div>
                        <h3>Title: ${task.title}</h3>
                        Description: ${task.description}
                    </div>
                </li>
            </g:each>
        </ul>
    </div>
    <div class="tasklist">
        <h2>Tasks not started</h2>
        <ul id="NotStarted" ondrop="drop(event)" ondragover="allowDrop(event)">
            <g:each var="task" in="${notstarted}">
                <li draggable="true" ondragstart="drag(event)" id="${task.id}">
                    <div>
                        <h3>Title: ${task.title}</h3>
                        Description: ${task.description}
                    </div>
                </li>
            </g:each>
        </ul>
    </div>
    <div class="tasklist">
        <h2>Tasks in progress</h2>
        <ul id="Started" ondrop="drop(event)" ondragover="allowDrop(event)">
           <g:each var="task" in="${inprogress}">
               <li draggable="true" ondragstart="drag(event)" id="${task.id}">
                   <div>
                       <h3>Title: ${task.title}</h3>
                       Description: ${task.description}
                   </div>
               </li>
           </g:each>
        </ul>
    </div>
    <div class="tasklist">
        <h2>Tasks done</h2>
        <ul id="Done" ondrop="drop(event)" ondragover="allowDrop(event)">
            <g:each var="task" in="${done}">
                <li draggable="true" ondragstart="drag(event)" id="${task.id}">
                    <div>
                        <h3>Title: ${task.title}</h3>
                        Description: ${task.description}
                    </div>
                </li>
            </g:each>
        </ul>
    </div>
</body>
</html>

