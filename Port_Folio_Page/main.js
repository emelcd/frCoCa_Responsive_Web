// Porfolio DATA
var personal = {
    name: "Mick L",
    jobrole: "Junior Web Developer",
    resume: "Frontend (Pure HTML/CSS/JS, React, Sass...) and Backend (PHP, Node, MySQL, ",
    skills: {
        frontend: {
            js: 85,
            html5: 80,
            css3: 75,
            react: 60,
            // codepen: 25,
            git: 30
            
        },
        backend: {
            py: 80,
            php:24,
            node: 60

        }

    }
}
var projects = {

    0: {
        proGit: "http.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Product Landing",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["js", "html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"

    },
    1: {
        proGit: "http.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Survey Form ",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3", "js"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    },
    2: {
        proGit: "http.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Tribute Page",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    },
    3: {
        proGit: "http.com/mickiticki/frCoCa_Responsive_Web",
        proName: "PortFolio Json",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    },
    4: {
        proGit: "http.com/mickiticki/frCoCa_Responsive_Web",
        proName: "Tech Documentation",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    }

};

var iconsLang = {
    "html5": '<i style="color:#DD4B25" class="fab fa-html5"></i>',
    "css3": '<i style="color:#06BAF3" class="fab fa-css3-alt"></i>',
    "js": '<i style="color:#CEB42E"class="fab fa-js-square"></i>',
    "py": '<i class="fab fa-python"></i>',
    "codepen": '<i class="fab fa-codepen"></i>',
    "git": '<i class="fab fa-github"></i>',
    "php": '<i class="fab fa-php"></i>',
    "node": '<i class="fab fa-node"></i>',
    "react": '<i class="fab fa-react"></i>'
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

    var mapLinkC = "<a href=" + arrLinks.proLink + "><i class='fab fa-codepen'></i></a>";
    var mapLinkG = "<a href=" + arrLinks.proGit + "><i class='fab fa-github'></i></a>";

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
        </div></div></div>
   

        `
        // ${projects[project].proCodeP}
        // ${projects[project].proGit}

    });

}

returnPersonalData(personal)

createProjects(projects)