var projects = {
    0:{
        proName: "Product Landing",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: "javascript",
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"

      },
    1:{
        proName: "Product Landing",
        proDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur harum tempore quia reiciendis nesciunt consectetur aspernatur unde error doloribus perspiciatis",
        proLang: "javascript",
        proLink: "https://codepen.io/mickiticki/pen/ExgOgRw",
        proImg: "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg"
    }
      


};

function createProjects(pro) {
    // console.log(pro);
    let i = 0;
    Object.keys(pro).forEach(project => {
        console.log(project.proName)
    });
    
}

createProjects(projects)