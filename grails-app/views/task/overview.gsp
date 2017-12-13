<html>
<head>
    <meta name="layout" content="main">
    <title>Protrack</title>
    <asset:javascript src="protrack.js"></asset:javascript>
</head>
<body>
    <div class="tasklist">
        <h2>Backlog</h2>
        <ul id="Backlog" ondrop="drop(event)" ondragover="allowDrop(event)">
            <li class="taskform">
                <g:form controller="task" action="addTask">
                    <div class="title">
                        <label>Title: </label>
                        <g:textField name="title" required="true"/>
                    </div>
                    <div class="description">
                        <label>Description: </label>
                        <g:textArea name="description" />
                    </div>
                    <g:hiddenField name="status" value="Backlog"></g:hiddenField>
                    <g:actionSubmit value='Save' class='submitsave'></g:actionSubmit>
                </g:form>
            </li>
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
    <div class="tasklist tasklistDone">
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
    <div class="delete" ondrop="dropDelete(event)" ondragover="allowDrop(event)">
        <h2>Delete Task</h2>
    </div>
</body>
</html>

