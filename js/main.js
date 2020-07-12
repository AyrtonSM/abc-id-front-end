var app = new Vue({
    el: '#app',
    data: {
      sysMainTitle : "ABCiD",
      sysSubTitle : "Ayrton's Breast Cancer Institute",
      menuItems: [
          {title:"Dashboard", url:"index.html"}, 
          {title:"Patients",  url:"patients.html"}, 
          {title:"Exams",     url:"exams.html"}, 
          {title:"LUNA Diagnosis",   url:"diagnosis.html"}
        ],
      patients:[
        {name:"Jurema", age:23, phone:"+55xx x xxxx xxxx", email:"jurema@jurema.com"},
        {name:"Jucilda", age:43, phone:"+55xx x xxxx xxxx", email:"jucilda@jucilda.com"},
        {name:"Brabinha", age:49, phone:"+55xx x xxxx xxxx", email:"brabinha123@brabinha.com"} 
      ],
      breastCancerLabels : ["radius_mean", "texture_mean", "perimeter_mean", "area_mean", "smoothness_mean", "compactness_mean", "concavity_mean","concave_points_mean","symmetry_mean", "fractal_dimension_mean", "radius_se", "texture_se",  "perimeter_se", "area_se", "smoothness_se", "compactness_se", "concavity_se", "concave_points_se", "symmetry_se", "fractal_dimension_se", "radius_worst", "texture_worst", "perimeter_worst", "area_worst", "smoothness_worst", "compactness_worst", "concavity_worst", "concave_points_worst", "symmetry_worst", "fractal_dimension_worst"],
      
    }
  });
