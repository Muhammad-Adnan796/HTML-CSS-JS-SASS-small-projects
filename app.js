var mobiles = {
  Samsung: {
    SamsungA10: {
      img: "../assets/samsung-galaxy-a10.png",
      name: "Samsung A10",
      ram: "4gb",
      rom: "64gb",
      camera: "13",
      price: "22,000 PKR",
    },
    SamsungA20: {
      img: "../assets/samsung-galaxy-a20.png",
      name: "Samsung A20",
      ram: "4gb",
      rom: "64gb",
      camera: "18",
      price: "28,000 PKR",
    },
    SamsungA30: {
      img: "../assets/samsung-galaxy-a30.png",
      name: "Samsung A30",
      ram: "4gb",
      rom: "64gb",
      camera: "25",
      price: "29,000 PKR",
    },
  },
  IPhone: {
    IPhone11: {
      img: "../assets/apple-iphone-11.png",
      name: "IPhone11",
      ram: "4gb",
      rom: "64gb",
      camera: "12",
      price: "100,000 PKR",
    },
    IPhone12: {
      img: "../assets/apple-iphone-12.png",
      name: "IPhone12",
      ram: "4gb",
      rom: "64gb",
      camera: "12",
      price: "150,000 PKR",
    },
    IPhone13: {
      img: "../assets/apple-iphone-13.png",
      name: "IPhone13",
      ram: "6gb",
      rom: "128gb",
      camera: "24",
      price: "200,000 PKR",
    },
  },
  Oppo: {
    OppoA5: {
      img: "../assets/oppo-a5.png",
      name: "OppoA5",
      ram: "8gb",
      rom: "128gb",
      camera: "64",
      price: "54,999 PKR",
    },
    OppoF19: {
      img: "../assets/oppo-f19.png",
      name: "OppoF19",
      ram: "6gb",
      rom: "128gb",
      camera: "48",
      price: "36,999 PKR",
    },
    OppoF11: {
      img: "../assets/oppo-f11.png",
      name: "OppoF11",
      ram: "4gb",
      rom: "64gb",
      camera: "48",
      price: "35,999 PKR",
    },
  },
  Vivo: {
    VivoY20: {
      img: "../assets/vivo-y20.png",
      name: "VivoY20",
      ram: "4gb",
      rom: "64gb",
      camera: "13",
      price: "26,999 PKR",
    },
    VivoY21: {
      img: "../assets/vivo-y21.png",
      name: "VivoY21",
      ram: "4gb",
      rom: "64gb",
      camera: "13",
      price: "43,999 PKR",
    },
    VivoY55: {
      img: "../assets/vivo-y55.png",
      name: "VivoY55",
      ram: "8gb",
      rom: "128gb",
      camera: "50",
      price: "64,999 PKR",
    },
  },
};

function mobilesObj(obj, value, model) {
  let dataDiv = document.querySelector(".inpData");

  let flag1 = true;
  let flag2 = true;
  for (let i in obj) {
    if (i?.toLowerCase() === value?.toLowerCase()) {
      flag1 = false;
      for (let k in obj[i]) {
        if (k?.toLowerCase() === model?.toLowerCase()) {
          flag2 = false;
          dataDiv.innerHTML = `
           <div id="inp_Value" style="display: flex; flex-direction: column; align-items: center" >
                <h1
                   style="
                     font-size: 5vw;
                     margin: 35px 0px 10px 0px ;
                     padding: 0px;
                     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                      color: rgb(11, 122, 173);
                        ">
                        ${obj[i][k]["name"]}
                </h1>

          <div id="card" style="width: 100%; display: flex; height: 100%">
            <div style="display: flex; flex: 1; box-sizing: border-box">
              <img
                width="150px"
                height="200px"
                style="margin: 30px auto"
                src="${obj[i][k]["img"]}"
                alt=""
              />
            </div>
            <div
              style="
                display: flex;
                flex: 1;
                flex-direction: column;
                margin: 30px auto;
                font-size: 20px;
                color: rgb(11, 122, 173);
                font-family: monospace;
                font-weight: 700;
              "
            >
              <br />
              <span>Ram : ${obj[i][k]["ram"]}</span><br />
              <span>Rom : ${obj[i][k]["rom"]}</span><br />
              <span>Camera : ${obj[i][k]["camera"]}mpx</span><br />
              <span>Price : ${obj[i][k]["price"]}</span><br />
            </div>
          </div>
        </div>`;
          break;
        }
      }
      if (flag2) {
        // document.write("Model not Found");
        dataDiv.innerHTML = `<h1 style="
         color: rgb(11, 122, 173);
         font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          margin: 30% 25%;"  
          >
          Model not Found
          </h1>
        `;
      }
      break;
    }
  }
  if (flag1) {
    // document.write("Company not Found");
    dataDiv.innerHTML = `<h1 style="
     color: rgb(11, 122, 173);
     font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      margin: 30% 25%;"  
      >
      Data not Found
      </h1>
    `;
  }
}

function mainFunc() {
  const inpCompany = document.getElementById("company").value;
  const inpModel = document.getElementById("model").value;

  mobilesObj(mobiles, inpCompany, inpModel);
}
