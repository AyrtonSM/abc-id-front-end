

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
      info : ''
    },
    methods:{
      sendExamToLuna : () => {
      
        axios.get('http://127.0.0.1:5000/prediction',{
          params : {
             "radius_mean": document.getElementById("radius_mean").value,
             "texture_mean": document.getElementById("texture_mean").value,
             "perimeter_mean":document.getElementById("perimeter_mean").value,
             "area_mean":document.getElementById("area_mean").value,
             "smoothness_mean":document.getElementById("smoothness_mean").value,
             "compactness_mean":document.getElementById("compactness_mean").value,
             "concavity_mean":document.getElementById("concavity_mean").value,
             "concave_points_mean":document.getElementById("concave_points_mean").value,
             "symmetry_mean":document.getElementById("symmetry_mean").value,
             "fractal_dimension_mean": document.getElementById("fractal_dimension_mean").value,
             "radius_se" :document.getElementById("radius_se").value,
             "texture_se":  document.getElementById("texture_se").value,
             "perimeter_se":document.getElementById("perimeter_se").value,
             "area_se":document.getElementById("area_se").value,
             "smoothness_se":document.getElementById("smoothness_se").value,
             "compactness_se":document.getElementById("compactness_se").value,
             "concavity_se":document.getElementById("concavity_se").value,
             "concave_points_se":document.getElementById("concave_points_se").value,
             "symmetry_se":document.getElementById("symmetry_se").value,
             "fractal_dimension_se":document.getElementById("fractal_dimension_se").value,
             "radius_worst":document.getElementById("radius_worst").value,
             "texture_worst":document.getElementById("texture_worst").value,
             "perimeter_worst":document.getElementById("perimeter_worst").value,
             "area_worst":document.getElementById("area_worst").value,
             "smoothness_worst":document.getElementById("smoothness_worst").value,
             "compactness_worst":document.getElementById("compactness_worst").value,
             "concavity_worst":document.getElementById("concavity_worst").value,
             "concave_points_worst":document.getElementById("concave_points_worst").value,
             "symmetry_worst":document.getElementById("symmetry_worst").value,
             "fractal_dimension_worst":document.getElementById("fractal_dimension_worst").value
          }
        }).then(response => (this.info = response));
        
        console.log(this.info);
      },  
    }
  });
