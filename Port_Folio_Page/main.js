// Porfolio DATA
var personal = {
    name: "Mick",
    jobrole: "Junior Web Developer",
    learning: ["react","js","html5","css3"],
    resume: "Frontend (Pure HTML/CSS/JS, React, Sass...) and Backend (PHP, Node, MySQL, ",
    skills: {
        frontend: {
            js: 85,
            html5: 80,
            css3: 75,
            react: 60,
            vue: 40,
            sass: 70,
            bootstrap: 65
        },
        backend: {
            py: 80,
            php: 24,
            node: 60,
            mongo: 70,
            laravel: 60,
            mySQL: 20, express:30
        },
        other: {
            git: 80,
            codepen: 70,
            adbXD: 50,
            adbPS: 60
        }
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
    "html5": ['<i class="devicon-html5-plain-wordmark colored"></i>', "#E54D26", "HTML5"],
    "css3": ['<i class="devicon-css3-plain-wordmark colored"></i>', "#3D8FC6", "CSS3"],
    "js": ['<i class="devicon-javascript-plain colored"></i>', "#F0DB4F", "JavaSscript"],
    "py": ['<i style="background: -webkit-linear-gradient(120deg, rgba(0,123,236,1) 50%, rgba(247,193,38,1) 50%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;"class="fab fa-python"></i>', "#F7C126", "Python"],
    "codepen": ['<i class="fab fa-codepen"></i>', "#94B8DB", "CodePen"],
    "git": ['<i class="fab fa-github"></i>', "#94B8DB", "GitHub"],
    "bootstrap": ['<i class="devicon-bootstrap-plain-wordmark colored"></i>', "#59407F", "Bootstrap 4"],
    "sass": ['<i class="devicon-sass-original colored"></i>', "#C96597", "Sass"],
    "php": ['<i style="color:#7377AD;"class="devicon-php-plain"></i>', "#7377AD", "php"],
    "vue": ['<i style="color: #41B883;"class="devicon-vuejs-plain-wordmark"></i>', "#41B883", "Vue.js"],
    "laravel": ['<i class="devicon-laravel-plain-wordmark colored"></i>', "#FD4F31", "laravel"],
    "node": ['<i style="color:#8BBF3D;"class="fab fa-node"></i>', "#8BBF3D", "Node.js"],
    "react": ['<i style="color:#5ED3F3" class="fab fa-react"></i>', "#5ED3F3", "React.js"],
    "mongo": ['<i style="color:#4FAC4C"class="devicon-mongodb-plain-wordmark"></i>', "#4FAC4C", "mongoDB"],
    "adbXD": ['<i style="color:#F75EEE"class="devicon-xd-line"></i>', "#F75EEE", "adobeXD"],
    "adbPS": ['<i style="color:#2FA3F7"class="devicon-photoshop-plain"></i>', "#2FA3F7", "AdobePS"],
    "mySQL": [' <i class="devicon-mysql-plain-wordmark colored"></i>', "#DD8716", "mySQL"],
    "express": ['<i class="devicon-express-original-wordmark"></i>',"","Express.js"]
}

// UTILITY
// RETURN ICONS
function returnIconsLang(arrLang) {

    var mapedIcons = arrLang.map(lang => {
        // console.log(lang)
        return iconsLang[lang][0];
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

    // console.log(personalDomT)
    var personalDomT = document.getElementById("welcome-title");
    personalDomT.innerHTML = `${per.name}<span class="spanT">K</span><hr class="welcome-hr">
    <p class='welcome-subtitle'>${per.jobrole}</>
    `;
}
function twC(text, codeColor) {
    var colors = {
        0: "--code-dec",
        1: "--code-fun",
        2: "--code-gold",
        3: "--code-grey",
        4: "--code-turq"
    }
    // console.log(colors[codeColor]);
    let coloredOut = `<span style='color: var(${colors[codeColor]})'>${text}</span>`
    return coloredOut;
}

var codedText = {
    0: [("function",0), ("returnIconsLinks", 1), ("(",3),("arrLinks",3),(")",2),("{",2)]
}

console.log(codedText[1]);


function returnTextWrapper() {
    var textWrapper = document.getElementById("welcome-skill-1");
    textWrapper.innerHTML += `
    <p>${twC("function", 0)} ${twC("returnIconsLinks", 1)}${twC("(",2)}${twC("arrLinks",3)}${twC(")",2)}${twC("{",2)}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;${twC("let", 0)} ${twC("mapedIcons",3)} ${twC("=",4)}
    <br>
    <br>
    <br>
    <br>
    ${twC("}",2)}
    </p>

    `}
    // var mapedIcons = arrLang.map(lang => {


// returnTextWrapper();
// RETURN LEARNING 
function returnLearning(arrLearn) {
    var learningWrapper = document.getElementById("welcome-subtitle");
    console.log(arrLearn);
    var mapedIcons = arrLearn.map(lang => {
        // console.log(lang)
        return iconsLang[lang][0];
    })
    // console.log(mapedIcons)
    // console.log(mapedIcons)
    learningWrapper.innerHTML += `
    
    <div id="learning-icons"><h6>RIGHT NOW LEARNING</h6><div id="icons-animation">${mapedIcons.join(" ")}</div></div>
    
    `
}
returnLearning(personal.learning)
// SKILSS BARS
function returnSkillsBars(perSkill, string) {
    var wrapperFrontEnd = document.getElementById(`welcome-${string}`);
    wrapperFrontEnd.innerHTML += "<h3 style='margin-bottom: 5%'>" + `${string}` + "</h3>";
    Object.keys(perSkill).forEach(skill => {
        // console.log(skill)
        // console.log(iconsLang[skill])
        // console.log(perSkill[skill])
        wrapperFrontEnd.innerHTML += `
        <div class='${skill}-div'>
        <h5 style="position: relative;right:20%; color: ${iconsLang[skill][1]}">${iconsLang[skill][2]}</h5>
        <p data-value="${perSkill[skill]}">${iconsLang[skill][0]}</p>
        <progress max="100" value="${perSkill[skill]}" class="${skill}">
        
        <div class="progress-bar">
        <span style="width: 80%; ">${perSkill[skill]}%</span>
        </div>
        </progress>
        </div>
        `




    })

    // sheet.insertRule(`
    // .${skill}[value]::-moz-progress-bar {
    //     background-image:

    //     -moz-linear-gradient(left, ${iconsLang[skill][1]} 23%, ${iconsLang[skill][1]});

    // }
    //     `, sheet.cssRules.length);

}

function setStyleBar(perSkill) {

    Object.keys(perSkill).forEach(skill => {
        var sheet = window.document.styleSheets[0];
        sheet.insertRule(`
            .${skill}::-webkit-progress-value {
                background-image:
        
                    -webkit-linear-gradient(top,
                        rgba(255, 255, 255, .25),
                        rgba(0, 0, 0, .2)),
                    -webkit-linear-gradient(left, ${iconsLang[skill][1]} 23%, ${iconsLang[skill][1]});
                    border-radius:3px;
        
                }
                `, sheet.cssRules.length);


    })
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
        </div>
        </div>
        </div>
        
        `
        
        // ${projects[project].proCodeP}
        // ${projects[project].proGit}
        
    }    );
    setStyleBar(personal.skills.backend)
    setStyleBar(personal.skills.frontend)
    setStyleBar(personal.skills.other)

    returnSkillsBars(personal.skills.frontend, "frontend")
    returnSkillsBars(personal.skills.backend, "backend")
    returnSkillsBars(personal.skills.other, "other")

    
}

// returnPersonalData(personal)

window.addEventListener('load', function () {
    // alert("eco")
})
createProjects(projects)




// console.log(wrapper[0])
// wrapper[0].setAttribute

// .html5::-webkit-progress-value {
//     /* Gradient background with Stripes */
//     background-image:

//         -webkit-linear-gradient(top,
//             rgba(255, 255, 255, .25),
//             rgba(0, 0, 0, .2)),
//         -webkit-linear-gradient(left,var(--text-color-highlight) 1%, var(--text-color-normal));
//     }