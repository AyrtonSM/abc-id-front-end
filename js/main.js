

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
      info : '',
      message : ''
    },
    methods:{
      sendExamToLuna : () => {

        var data = {
          "radius_mean": parseFloat(document.getElementById("radius_mean").value),
          "texture_mean": parseFloat(document.getElementById("texture_mean").value),
          "perimeter_mean": parseFloat(document.getElementById("perimeter_mean").value),
          "area_mean": parseFloat(document.getElementById("area_mean").value),
          "smoothness_mean": parseFloat(document.getElementById("smoothness_mean").value),
          "compactness_mean": parseFloat(document.getElementById("compactness_mean").value),
          "concavity_mean": parseFloat(document.getElementById("concavity_mean").value),
          "concave_points_mean": parseFloat(document.getElementById("concave_points_mean").value),
          "symmetry_mean": parseFloat(document.getElementById("symmetry_mean").value),
          "fractal_dimension_mean": parseFloat(document.getElementById("fractal_dimension_mean").value),
          "radius_se" : parseFloat(document.getElementById("radius_se").value),
          "texture_se":  parseFloat(document.getElementById("texture_se").value),
          "perimeter_se": parseFloat(document.getElementById("perimeter_se").value),
          "area_se": parseFloat(document.getElementById("area_se").value),
          "smoothness_se": parseFloat(document.getElementById("smoothness_se").value),
          "compactness_se": parseFloat(document.getElementById("compactness_se").value),
          "concavity_se": parseFloat(document.getElementById("concavity_se").value),
          "concave_points_se": parseFloat(document.getElementById("concave_points_se").value),
          "symmetry_se": parseFloat(document.getElementById("symmetry_se").value),
          "fractal_dimension_se": parseFloat(document.getElementById("fractal_dimension_se").value),
          "radius_worst": parseFloat(document.getElementById("radius_worst").value),
          "texture_worst": parseFloat(document.getElementById("texture_worst").value),
          "perimeter_worst": parseFloat(document.getElementById("perimeter_worst").value),
          "area_worst": parseFloat(document.getElementById("area_worst").value),
          "smoothness_worst": parseFloat(document.getElementById("smoothness_worst").value),
          "compactness_worst": parseFloat(document.getElementById("compactness_worst").value),
          "concavity_worst": parseFloat(document.getElementById("concavity_worst").value),
          "concave_points_worst": parseFloat(document.getElementById("concave_points_worst").value),
          "symmetry_worst": parseFloat(document.getElementById("symmetry_worst").value),
          "fractal_dimension_worst":parseFloat(document.getElementById("fractal_dimension_worst").value)
     }

        // console.log(data);
        axios.post('http://ec2-50-17-85-136.compute-1.amazonaws.com:5000/prediction', data).then(response => {
          // axios.post('http://127.0.0.1:5000/prediction', data).then(response => {
            console.log(response.data)
         
          document.getElementById('result').innerHTML = response.data.message;
          alert(response.data.message)
        });

      },  
    }
  });
