/*
//test code ver 3.
//select element
document.getElementById("band-car-select").onchange = function() {
    let opUpdate = updateValue();
    console.log(opUpdate);
    //return opUpdate;
}
function updateValue() {
  const select = document.getElementById('band-car-select');
  const bandcar = select.value;
  console.log(bandcar);//Input from select
  return bandcar;
}
//complete code ver 2.

    const optionalCar = "toyota"; //select optional.
        //console.log(optionalCar);
function gasHonda(carType) {
    let valueTotal;
    if(carType === "toyota") {
        const liters = 6;
        const kilometers = 100;
        const efficiency = kilometers / liters;
        valueTotal = efficiency;
       // console.log(efficiency);
             
    } else{
        const liters = 8;
        const kilometers = 100;
        const efficiency = kilometers / liters;
        valueTotal = efficiency;
        //console.log('no');
    }
    return valueTotal;
  }
  const newVariable = gasHonda(optionalCar); // gasHonda must be input from select element.
  const toTalgasused = newVariable;
      console.log((newVariable).toFixed(2));
  
  const ptt95 = 40.55; //price for gas by PTT gasoline 95.
  //Result 
  function result(value){
      var total = parseInt(value) / toTalgasused + 0;
      console.log(  (total * ptt95).toFixed(2) );
      return document.getElementById('result').innerHTML= (total * ptt95).toFixed(2);
  }
  

  //old coded
   /*
   if (bandcar === 'toyota') {
        console.log('yes')
        const liters = 6;
        const kilometers = 100;


   } else if(bandcar === 'mazda'){
    console.log('yes');
    const liters = 8;
    const kilometers = 100;
    var efficiency = kilometers / liters;
    console.log(efficiency);

   } else  {
    console.log('no')
   }
   
}

*/

//condition select

/*
//Complete code do not touch.
//cal gas each band car
function gasHonda() {
    const liters = 6;
    const kilometers = 100;
    const efficiency = kilometers / liters;
    return efficiency;
  }
const efficiency = gasHonda();//16.66 -- range by each car --
const ptt95 = 36.55; //price for gas by PTT gasoline 95.
//Result 
function result(value){
    var total = parseInt(value) / efficiency + 0;
    console.log(  (total * ptt95).toFixed(2) );
    return document.getElementById('result').innerHTML= (total * ptt95).toFixed(2);
}

*/

function result() {
    var inPutNumber=parseInt(document.getElementById('number').value);
    var selected = document.getElementById('band-car-select').value;

    //Gas toyota altis
    function gasToyota() {
        const liters = 5.3;
        const kilometers = 100;
        const Gasats = kilometers / liters;
        return Gasats;
      }
      const Gasats = gasToyota();
    //Gas Honda City
    function gasHonda() {
        const liters = 6;
        const kilometers = 100;
        const GashndCt = kilometers / liters;
        return GashndCt;
      }
      const GashndCt = gasHonda();
      //Gas Mazda 3
    function gasMazda() {
        const liters = 8.4;
        const kilometers = 100;
        const GasMz3 = kilometers / liters;
        return GasMz3;
      }
      const GasMz3 = gasMazda();
      //Gas BMW 220i
    function gasBmw220i() {
        const liters = 8;
        const kilometers = 100;
        const GasBw220i = kilometers / liters;
        return GasBw220i;
      }
      const GasBw220i = gasBmw220i();
    let valueBath = 35;  
    
    /*  
    if (selected === 'plzselect'){ //toyota -
       // console.log('yes');
        document.getElementById('result').innerHTML = "*เลือกรุ่นรถยนตร์ที่ต้องการคำนวณและกรอกระยะทาง";
    }  else if(selected === 'toyota'){
        // console.log('yes honda');
         document.getElementById('result').innerHTML = (inPutNumber / Gasats * valueBath + Gasats).toFixed(2)+ " บาท";
    } else if(selected === 'honda'){
       // console.log('yes honda');
        document.getElementById('result').innerHTML = (inPutNumber / GashndCt * valueBath + GashndCt).toFixed(2)+ " บาท";
    } else if(selected === 'mazda'){
        //console.log('yes mazda');
        document.getElementById('result').innerHTML = (inPutNumber / GasMz3 * valueBath + GasMz3).toFixed(2)+ " บาท";
    } else if(selected === 'bmw'){
        //console.log('yes bmw');
        document.getElementById('result').innerHTML = (inPutNumber / GasBw220i * valueBath + GasBw220i).toFixed(2)+ " บาท";
    }
*/
    switch (selected) {
        case "plzselect" :
            document.getElementById('result').innerHTML = "<span style='color:#FA345B;'>*เลือกรุ่นรถยนตร์ที่ต้องการคำนวณและกรอกระยะทาง</span>";
            break;
        case "toyota" :
            document.getElementById('result').innerHTML = (inPutNumber / Gasats * valueBath + Gasats).toFixed(2)+ " บาท";
            break;
        case "honda":
            document.getElementById('result').innerHTML = (inPutNumber / GashndCt * valueBath + GashndCt).toFixed(2)+ " บาท";
            break;
        case "mazda":
            document.getElementById('result').innerHTML = (inPutNumber / GasMz3 * valueBath + GasMz3).toFixed(2)+ " บาท";
            break;
        case "bmw":
            document.getElementById('result').innerHTML = (inPutNumber / GasBw220i * valueBath + GasBw220i).toFixed(2)+ " บาท";
            break;
    }
}