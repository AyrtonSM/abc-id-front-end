#ABCiD
## Ayrton's Breast Cancer Identificador 
### This is an web page for a imaginary company which works with Artificial Inteligence (A.I) more specifically 
### and its main product is LUNA, the A.I capable of recognizing if a person has or doesn't have a breast cancer. 

This is just view part, backend will be resposible for sending the details of the image to LUNA and based on that information
she'll predict whether the person has a breast cancer.

Use backend project as well to be able to use the model 
https://github.com/AyrtonSM/abc-id-front-end

How to run: 

`$ docker build -t breast-cancer-api-front-end .` 

`$ docker run --name breast-cancer-api-front-end -d -p 8000:80 breast-cancer-api-front-end`
