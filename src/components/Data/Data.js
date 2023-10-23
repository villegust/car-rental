// For the car showcase
import carAudi from "../../images/Cars/audi-rs6.jpg";
import carBmw from "../../images/Cars/bmw-m4-compentition.jpg";
import mercedesCar from "../../images/Cars/mercedes-benz-g-wagon.jpg";
import porscheCar from "../../images/Cars/Porsche_911_GT3_RS.jpg";
import koenigseggCar from "../../images/Cars/Koenigsegg-Jesko.jpg";
import astonmartinCar from "../../images/Cars/aston-martin.jpg";
import lamborginiUrus from "../../images/Cars/lamborghini-urus.jpg";
import polestar2 from "../../images/Cars/polestar-2.jpg";

//for the model page
import Audi from "../../images/Car-model/audi-rs6-box.jpg";
import Bmw from "../../images/Car-model/bmw-m4-box.jpg";
import Mercedes from "../../images/Car-model/mercedes-g63-box.jpg";
import Porsche from "../../images/Car-model/porsche-911-box.jpg";
import Koenigsegg from "../../images/Car-model/koenigsegg-jesko-box.jpg";
import Astonmartin from "../../images/Car-model/am-db5-box.jpg";
import LamborginiUrus from "../../images/Car-model/lamborghini-urus-box.jpg";
import Polestar2 from "../../images/Car-model/ps-2-box.jpg";

//Reviews profile pic
import img1 from "../../images/Reviews/profile1.jpg"
import img2 from "../../images/Reviews/profile2.jpg"
import img3 from "../../images/Reviews/profile3.jpg"
import img4 from "../../images/Reviews/profile4.jpg"

export const CAR_DATA = [
    [
        {
            id: 1,
            fullName: "Audi RS6 Avant",
            name: "Audi RS6",
            price: "1000",
            img: carAudi,
            modelImg: Audi,
            model: "RS6",
            mark: "Audi",
            year: "2022",
            doors: "4",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Gasoline",

        },
    ],
    [
        {
            id: 2,
            fullName: "BMW M4 Compentition",
            name: "BMW M4 ",
            price: "1200",
            img: carBmw,
            modelImg: Bmw,
            model: "M4",
            mark: "BMW",
            year: "2021",
            doors: "2",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Gasoline",

        },
    ],
    [
        {
            id: 3,
            fullName: "Mercedes Benz G63 Wagon",
            name: "Mercedes G63 ",
            price: "1400",
            img: mercedesCar,
            modelImg: Mercedes,
            model: "G63 Wagon",
            mark: "Mercedes",
            year: "2022",
            doors: "4",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Disel",

        },
    ],
    [
        {
            id: 4,
            fullName: "Porsche 911 GT3 RS",
            name: "Porsche 911 ",
            price: "1000",
            img: porscheCar,
            modelImg: Porsche,
            model: "911 GT3 RS",
            mark: "Porsche",
            year: "2023",
            doors: "2",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Gasoline",

        },
    ],
    [
        {
            id: 5,
            fullName: "Aston Martin DB5",
            name: "Aston Martin DB5",
            price: "1800",
            img: astonmartinCar,
            modelImg: Astonmartin,
            model: "DB5",
            mark: "Aston Martin",
            year: "1964",
            doors: "2",
            ac: "Yes",
            transmission: "Manual",
            fuel: "Gasoline",

        },
    ],
    [
        {
            id: 6,
            fullName: "Lamborghini Urus",
            name: "Lamborghini Urus",
            price: "2000",
            img: lamborginiUrus,
            modelImg: LamborginiUrus,
            model: "Urus",
            mark: "Lamborghini",
            year: "2021",
            doors: "4",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Disel",

        },
    ],
    [
        {
            id: 7,
            fullName: "Koenigsegg Jesko",
            name: "Koenigsegg Jesko",
            price: "2500",
            img: koenigseggCar,
            modelImg: Koenigsegg,
            model: "Jesko",
            mark: "Koenigsegg",
            year: "2022",
            doors: "2",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Gasoline",

        },
    ],
    [
        {
            id: 8,
            fullName: "Polestar 2",
            name: "Polestar 2",
            price: "1900",
            img: polestar2,
            modelImg: Polestar2,
            model: "2",
            mark: "Polestar",
            year: "2020",
            doors: "4",
            ac: "Yes",
            transmission: "Automatic",
            fuel: "Electric",

        },
    ],
];

export const FAQ_DATA = [
    {
      question: "Question 1",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci mollitia, repudiandae porro assumenda, magnam delectus repellat facere sapiente aut blanditiis nam reiciendis architecto. Laborum officia iure alias voluptas libero.",
    },
    {
      question: "Question 2",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci mollitia, repudiandae porro assumenda, magnam delectus repellat facere sapiente aut blanditiis nam reiciendis architecto. Laborum officia iure alias voluptas libero.",
    },
    {
      question: "Question 3",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci mollitia, repudiandae porro assumenda, magnam delectus repellat facere sapiente aut blanditiis nam reiciendis architecto. Laborum officia iure alias voluptas libero.",
    },
    {
      question: "Question 4",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci mollitia, repudiandae porro assumenda, magnam delectus repellat facere sapiente aut blanditiis nam reiciendis architecto. Laborum officia iure alias voluptas libero.",
    },
    {
      question: "Question 5",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci mollitia, repudiandae porro assumenda, magnam delectus repellat facere sapiente aut blanditiis nam reiciendis architecto. Laborum officia iure alias voluptas libero.",
    },
  ];


export const LOCATION_DATA = [
    {
        location: "Stockholm",

    },
    {
        location: "Uppsala",

    },
    {
        location: "Malmö",

    },
    {
        location: "Linköping",

    },
    {
        location: "Göteborg",

    },
]

export const REVIEW_DATA = [
    {
        name: "Olivia Harper",
        homeCountry: "Bolivia",
        profileImg: img1,
        title: "Unmatched Luxury and Service:",
        review: "Exceptional car fleet and impeccable service. Courteous staff, expert knowledge, and the best destination for high-end car rentals."

    },
    {
        name: "Ethan Reynolds",
        homeCountry: "Norway",
        profileImg: img2,
        title: "A Symphony of Opulence and Style:",
        review: "Extraordinary luxury cars that redefine elegance. The entire experience is a celebration of opulence. Staff's attention to detail is impressive."

    },
    {
        name: "Caleb Mitchell",
        homeCountry: "New Zealand",
        profileImg: img3,
        title: "Refined Elegance at Its Finest:",
        review: "An unrivaled level of sophistication. A luxury experience from start to finish. From the showroom to the car, everything exudes elegance."

    },
    {
        name: "Sophia Bennett",
        homeCountry: "Canada",
        profileImg: img4,
        title: "The Epitome of Class and Style:",
        review: "Seamless, VIP experience with exquisite amenities. They create unforgettable moments. For a touch of class and style, this is the ideal choice."

    },


]