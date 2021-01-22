var projects = {
    0:{
        proName: "Product Landing",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: "javascript",
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"

      },
    1:{
        proName: "Survey Form ",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: "v",
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    }
      


};

function createProjects(pro) {
    // console.log(pro);
    Object.keys(pro).forEach(project => {
        // Aqui Iría lA QUERY DE JAVASCRIPT
        let proName = pro[project].proName;     
        let proDescription = pro[project].proDescription;  
        let proLang = pro[project].proLang;     
        let proLink = pro[project].proLink;     
        let proImg = pro[project].proImg;  
        console.log(proName);
        console.log(proDescription); 
        console.log(proLang);
        console.log(proLink);
        console.log(proImg); 
    });
    
}

createProjects(projects)