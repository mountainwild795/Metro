import { XMLHttpRequest } from "xmlhttprequest-ts";

export const getRecognization = () => {
  const image = { image: "https://d1mfcqjbhp6mmy.cloudfront.net/vehicles/audi-sports-car-r8-marlene.jpeg" };
  const xmlhttp = new XMLHttpRequest();
  let result = "result";

  console.log(result);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      result = xmlhttp.responseText;
    }
  };
  // console.log(result);
  console.log(result);

  xmlhttp.open("POST", "https://dev.sighthoundapi.com/v1/detections?type=face,person&faceOption=landmark,gender");
  xmlhttp.setRequestHeader("Content-type", "application/json");
  xmlhttp.setRequestHeader("X-Access-Token", "YOUR-CLOUD-TOKEN");
  xmlhttp.send(JSON.stringify(image));
};
