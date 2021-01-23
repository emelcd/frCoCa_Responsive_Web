// Porfolio DATA
var personal = {
    name: "Mick López",
    jobrole: "Junior Web Developer",
    resume: "Frontend (Pure HTML/CSS/JS, React, Sass...) and Backend (PHP, Node, MySQL, "
    // skills: {}
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
    "html5": '<i class="fab fa-html5"></i>',
    "css3": '<i class="fab fa-css3-alt"></i>',
    "js": '<i class="fab fa-js-square"></i>',
    "py": '<i class="fab fa-python"></i>',
    "codepen": '<i class="fab fa-codepen"></i>',
    "git": '<i class="fab fa-github"></i>'
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
    personalDomT.innerHTML = `${per.name}<hr class="welcome-hr">`;

    var personalDom = document.getElementById("welcome-wrapper");
    personalDom.innerHTML += `
    <h3 class='welcome-subtitle'>${per.jobrole}
    `;
}
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