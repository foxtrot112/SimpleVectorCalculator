let clickMeButton = document.querySelector("button#ClickMe");  // <--  Refering the HTML entity  
let clickDotProductButtom = document.querySelector("button#dotProduct");
let clickCrossProductButtom = document.querySelector("button#crossProduct");
let clickGetAngelThetaButtom = document.querySelector("button#getThetaAngle")

let applicationParagraph = document.querySelector("p#application");      

let inputA = document.querySelector("input#input1");   
let inputB = document.querySelector("input#input2"); 
let inputC = document.querySelector("input#input3"); 

let inputAA = document.querySelector("input#inputB1");   
let inputBB = document.querySelector("input#inputB2"); 
let inputCC = document.querySelector("input#inputB3"); 




class vec3 {
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    dotProduct(other) {
      
        return (this.x * other.x) + (this.y * other.y) + (this.z * other.z);
   } 
   
    crossProduct(other) {

        return new vec3(((this.y * other.z)-(this.z*other.y)),((this.z * other.x)-(this.x*other.z)),((this.x * other.y)-(this.y*other.x)));
    }
}

 clickDotProductButtom.addEventListener("click" , () => {
     
    let vector1 = new vec3(Number(inputA.value),Number(inputB.value),Number(inputC.value));
    let vector2 = new vec3(Number(inputAA.value),Number(inputBB.value),Number(inputCC.value));
   
     let result = vector1.dotProduct(vector2);
     applicationParagraph.textContent = result;
    }    );
 clickCrossProductButtom.addEventListener("click" , () => {
    
    let vector1 = new vec3(Number(inputA.value),Number(inputB.value),Number(inputC.value));
    let vector2 = new vec3(Number(inputAA.value),Number(inputBB.value),Number(inputCC.value));

    let result = vector1.crossProduct(vector2);

    applicationParagraph.textContent = `${result.x}i,${result.y}j,${result.z}k`;

 }    );

 clickGetAngelThetaButtom.addEventListener("click" , () => {
    let vector1 = new vec3(Number(inputA.value),Number(inputB.value),Number(inputC.value));
    let vector2 = new vec3(Number(inputAA.value),Number(inputBB.value),Number(inputCC.value));
   
     let result = vector1.dotProduct(vector2);
     
   let  magnitudeV1 = Math.sqrt((vector1.dotProduct(vector1)));
   let  magnitudeV2 = Math.sqrt((vector2.dotProduct(vector2)));

     let ThetaR = Math.acos(result/(magnitudeV1*magnitudeV2));
     let ThetaD = (ThetaR*180.0)/Math.PI; 

     applicationParagraph.textContent = `In Degree = ${ThetaD}, In Radians = ${ThetaR}` ;

 })
 //<---Binding the Click me action to the clickMeButtom Functionality [click string refered to the action button in our case clicked]
