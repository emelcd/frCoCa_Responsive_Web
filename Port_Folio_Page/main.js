// Porfolio DATA
var personal = {
    name: "Mick L",
    jobrole: "Junior Web Developer",
    resume: "Frontend (Pure HTML/CSS/JS, React, Sass...) and Backend (PHP, Node, MySQL, ",
    skills: {
        frontend: {js: 85,html5: 80,css3: 75,react: 60,vue:40,sass:70,bootstrap:65},
        backend: {py: 80,php:24,node: 60,mongo: 70,laravel: 60, mySQL: 20},
        other: {git: 80,codepen:70,adbXD: 50,adbPS: 60}
        }

}

var projects = {

    0: {
        proGit: "https://github.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Product Landing",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["js", "html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"

    },
    1: {
        proGit: "https://github.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Survey Form ",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3", "js"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    },
    2: {
        proGit: "https://github.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Tribute Page",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    },
    3: {
        proGit: "https://github.com/mickiticki/frCoCa_Responsive_Web",
        proName: "PortFolio Json",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    },
    4: {
        proGit: "https://github.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Tech Documentation",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    }
};

var iconsLang = {
    "html5": '<i class="devicon-html5-plain-wordmark colored"></i>',
    "css3": '<i class="devicon-css3-plain-wordmark colored"></i>',
    "js": '<i class="devicon-javascript-plain colored"></i>',
    "py": '<i style="background: -webkit-linear-gradient(120deg, rgba(0,123,236,1) 50%, rgba(247,193,38,1) 50%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"class="fab fa-python"></i>',
    "codepen": '<i class="fab fa-codepen"></i>',
    "git": '<i class="fab fa-github"></i>',
    "bootstrap":'<i class="devicon-bootstrap-plain-wordmark colored"></i>',
    "sass":'<i class="devicon-sass-original colored"></i>',
    "php": '<i style="color:#7377AD;"class="devicon-php-plain"></i>',
    "vue":'<i style="color: #41B883;"class="devicon-vuejs-plain-wordmark"></i>',
    "laravel":'<i class="devicon-laravel-plain-wordmark colored"></i>',
    "node": '<i style="color:#8BBF3D;"class="fab fa-node"></i>',
    "react": '<i style="color:#5ED3F3" class="fab fa-react"></i>',
    "mongo": '<i style="color:#4FAC4C"class="devicon-mongodb-plain-wordmark"></i>',
    "adbXD": '<i style="color:#F75EEE"class="devicon-xd-line"></i>',
    "adbPS": '<i style="color:#2FA3F7"class="devicon-photoshop-plain"></i>',
    "mySQL": ' <i class="devicon-mysql-plain-wordmark colored"></i>'
}

// UTILITY
// RETURN ICONS
function returnIconsLang(arrLang) {

    var mapedIcons = arrLang.map(lang => {
        // console.log(lang)
        return iconsLang[lang];
    })
    // console.log(mapedIcons)
    // console.log(mapedIcons)
    return `${mapedIcons.join(" ")}`;


}

function returnIconsLinks(arrLinks) {

    var mapLinkC = "<a href='" + arrLinks.proLink + "'><i class='fab fa-codepen'></i></a>";
    var mapLinkG = "<a href='" + arrLinks.proGit + "'><i class='fab fa-github'></i></a>";

    return `${mapLinkC}
    ${mapLinkG}`;
    // console.log(mapedIcons)
    // return `<a href='${mapLinkC}'>${iconsLang[git]}</a>`;


}
// RETURN WELCOME
function returnPersonalData(per) {

    console.log(personalDomT)
    var personalDomT = document.getElementById("welcome-title");
    personalDomT.innerHTML = `${per.name}<hr class="welcome-hr">
    <p class='welcome-subtitle'>${per.jobrole}</>
    `;
}

// SKILSS BARS
function returnSkillsBars(perSkill, string) {
    var wrapperFrontEnd = document.getElementById(`welcome-${string}`);
    wrapperFrontEnd.innerHTML += "<h3 style='margin-bottom: 5%'>"+`${string}`+"</h3>";
    Object.keys(perSkill).forEach(skill => {
        console.log(skill)
        console.log(iconsLang[skill])
        console.log(perSkill[skill])
        wrapperFrontEnd.innerHTML += `
        
        <p data-value="${perSkill[skill]}">${iconsLang[skill]}</p>
        <progress max="100" value="${perSkill[skill]}" class="html5">
            
            <div class="progress-bar">
                <span style="width: 80%; color: black">${perSkill[skill]}%</span>
            </div>
        </progress>
        `
    })

    
}
returnSkillsBars(personal.skills.frontend, "frontend")
returnSkillsBars(personal.skills.backend, "backend")
returnSkillsBars(personal.skills.other, "other")
// RETURN PRODUCTS)
function createProjects(pro) {
    var projectDom = document.getElementById("projects");
    Object.keys(pro).forEach(project => {
        // Project Variables
        let proName = pro[project].proName;
        let proDescription = pro[project].proDescription;
        let proLang = pro[project].proLang;
        let proLink = pro[project].proLink;
        let proImg = pro[project].proImg;

        projectDom.innerHTML += `
        <div class="project-wrapper">
        <div class="project-item">
        <h4 class="project-item-name">${proName}</h4>
        <hr class="project-hr">
        <a href="${proLink}"><img class="project-item-img" src="${proImg}"></img></a>
        <h6 class="project-item-des">${proDescription}</h6>
        <div class="project-footer">
        <div class="project-thumbnail-right">
        ${returnIconsLang(projects[project].proLang)}
        </div>
        <div class="project-thumbnail-left">
        ${returnIconsLinks(projects[project])}
        </div>
        </div>
        </div>
        </div>
   
        `
        // ${projects[project].proCodeP}
        // ${projects[project].proGit}

    });

}

returnPersonalData(personal)

createProjects(projects)