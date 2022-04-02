

const generateSite = (teamMembers) => {
   const htmlPage = [];
 
    const managerSection = (manager) => {
        let managerHtml = 
        `
        <div class="col-sm-4">
        <div class="card bg-primary mb-3" style="width: 18rem;">
        <div class="card-body">
           
            <h5 class="card-title text-white"><i class="fa-solid fa-mug-hot"></i>
            ${manager.name}
            </h5>            
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${manager.id}</li>
                <li class="list-group-item"> Email: <span id="email"><a href='mailto:${manager.email}'>${manager.email}</a></span></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
         </div>
         </div>

        `;
        htmlPage.push(managerHtml);
    }; 

    const engineerSection = (engineer) => {
        let engineerHtml = 
        `
        <div class="col-sm-4">
        <div class="card bg-primary mb-3" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title text-white"><i class="fas fa-glasses"></i>
            ${engineer.name}
            </div>
    
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href='mailto:${engineer.email}'> ${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub Username: <a target="_blank" href='https://github.com/${engineer.github}'> ${engineer.github}</a></li>
            </ul>
    
            </div>
            </div>
  
        `;
        htmlPage.push(engineerHtml);
    
    }

    const internSection = (intern) => {
        let internHtml = 
        `
        <div class="col-sm-4">
        <div class="card bg-primary mb-3" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title text-white"><i class="fa-solid fa-user-graduate"></i>
            ${intern.name}
            </div>
    
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href='mailto:${intern.email}'>${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
            </div>

        `;
        htmlPage.push(internHtml);
    
    }
    

for(i = 0; i < teamMembers.length; i++){
    if(teamMembers[i].getRole() === 'Manager') {
        managerSection(teamMembers[i]);
    }

    if(teamMembers[i].getRole() === "Engineer") {
        engineerSection(teamMembers[i]);
    }

    if(teamMembers[i].getRole() === "Intern") {
        internSection(teamMembers[i]);
    }

}

return htmlPage.join(" ");

}

module.exports = teamMembers => {
    return  `
    <!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link rel="stylesheet" href="./styles.css">
    <title>Team Profile Generator</title>
</head>
<body>

<div class="p-5 mb-4 bg-danger rounded-3">
<div class="container-fluid py-1 text-center text-white ">
    <h1 class="display-5 fw-bold">My Team</h1>

</div>
</div>

    <div class="container"> 
    <div class="row">
    ${generateSite(teamMembers)} 
    </div>
    </div>
</body>
</html>
    `;
}


