import fs from "fs";

interface IHouses {
  name: String;
  image: String;
  description: String;
  country: String;
  address: String;
  bedrooms: String;
  bathrooms: String;
  surface: String;
  year: String;
  price: String;
}

export const housesData: IHouses[] = [
  {
    name: "house 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/1.jpeg?alt=media&token=fef4c242-f367-4a12-9498-8032c605cc56",
    country: "United States",
    address: "7240C Argyle St. Lawndale, CA 90260",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "110000",
  },
  {
    name: "house 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/2.jpeg?alt=media&token=91309c3c-a6f3-4fe6-9777-a47b16bf6932",
    country: "Canada",
    address: "798 Talbot St. Bridgewater, NJ 08807",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "140000",
  },
  {
    name: "house 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/3.jpeg?alt=media&token=3811eda0-57b3-40fb-a738-a6c2eca39470",
    country: "United States",
    address: "2 Glen Creek St. Alexandria, VA 22304",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "170000",
  },
  {
    name: "house 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/4.jpeg?alt=media&token=fffc950f-8558-490b-b1df-207b076e9a5f",
    country: "Canada",
    address: "84 Woodland St. Cocoa, FL 32927",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2016",
    price: "200000",
  },
  {
    name: "house 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/5.jpeg?alt=media&token=64369ccb-b726-4e74-a567-576d377fad3d",
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2015",
    price: "210000",
  },
  {
    name: "house 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/6.jpeg?alt=media&token=322b2e42-c540-47ef-86cc-b86d3579b8ef",
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2014",
    price: "220000",
  },
  {
    name: "apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/7.jpeg?alt=media&token=f43471b8-cfe0-4cfa-832d-227d60deec07",
    country: "Canada",
    address: "32 Pawnee Street Butte, MT 59701",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1200 sq ft",
    year: "2012",
    price: "20000",
  },
  {
    name: "apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.",
    image: "https://firebasestorage.googleapis.com/v0/b/metro-da27d.appspot.com/o/8.jpeg?alt=media&token=08f9ace9-8771-4cd0-bbe0-a3e194009aba",
    country: "United States",
    address: "28 Westport Dr. Warminster, PA 18974",
    bedrooms: "3",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2011",
    price: "30000",
  },
];
