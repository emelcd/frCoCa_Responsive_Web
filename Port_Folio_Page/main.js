// Variables
var projects = {

    0:{
        proName: "Product Landing",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["js", "html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"

      },
    1:{
        proName: "Survey Form ",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: ["html5", "css3"],
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    }
};

var iconsLang = {
    "html5":'<i class="fab fa-html5"></i>',
    "css3":'<i class="fab fa-css3-alt"></i>',
    "js": '<i class="fab fa-js"></i>',
    "py": '<i class="fab fa-python"></i>'
}

// RETURN ICONS
function returnHtmlIcon(key) {
    return iconsLang[key]
}
function returnIcons(arrLang) {

    var mapedIcons = arrLang.map(lang => {
        // console.log(lang)
        return returnHtmlIcon(lang);
    })
    // console.log(mapedIcons)
    return mapedIcons;

    
}
// FUNCIONes QUE DEVUELVE PROYECTOS


// returnIcons(projects[0].proLang)
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
        <div class="project-item">
        <h4 class="project-item-name">${proName}</h4>
        <a href="${proLink}"><img class="project-item-img" src="${proImg}"></img></a>
        <h6 class="project-item-des">${proDescription}</h6>
        <div class="project-thumbnail">
        ${returnIcons(projects[project].proLang)}
        </div>
        <div class="product-footer"></div></div>
        `

    });
    
}

createProjects(projects)