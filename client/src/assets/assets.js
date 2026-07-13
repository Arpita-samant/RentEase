import logo from "./logo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg";
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import main from "./main.png";
import banner_image from "./banner_image.png";
import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";

// Product Images
import sofa from "./sofa.png";
import bed from "./bed.png";
import study_table from "./study_table.png";
import office_chair from "./office_chair.png";
import refrigerator from "./refrigerator.png";
import washing_machine from "./washing_machine.png";
import smart_tv from "./smart_tv.png";
import microwave from "./microwave.png";
import dining_table from "./dining_table.png";
import air_conditioner from "./air_conditioner.png";

export const cityList = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];

export const assets = {
  logo,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  close_icon,
  users_icon,
  edit_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIcon,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon_colored,
  location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
  tick_icon,
  delete_icon,
  eye_icon,
  eye_close_icon,
  filter_icon,
  main,
  banner_image,
  upload_icon,
  user_profile,
};

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColored,
  },
  {
    name: "Add Product",
    path: "/owner/add-product",
    icon: addIcon,
    coloredIcon: addIconColored,
  },
  {
    name: "Manage Products",
    path: "/owner/manage-products",
    icon: carIcon,
    coloredIcon: carIconColored,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: listIcon,
    coloredIcon: listIconColored,
  },
];

export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "Admin",
  email: "admin@example.com",
  role: "owner",
  image: user_profile,
};

export const dummyProductData = [
  {
    _id: "1",
    name: "Modern 3-Seater Sofa",
    brand: "IKEA",
    category: "Furniture",
    image: sofa,
    rentPerMonth: 1299,
    securityDeposit: 5000,
    location: "Delhi",
    description: "Comfortable fabric sofa perfect for modern living rooms.",
    isAvailable: true,
  },
  
  {
    _id: "2",
    name: "Queen Size Bed",
    brand: "Wakefit",
    category: "Furniture",
    image: bed,
    rentPerMonth: 1999,
    securityDeposit: 4000,
    location: "Mumbai",
    description: "Premium wooden queen-size bed with durable frame.",
    isAvailable: true,
  },
  {
    _id: "3",
    name: "Wooden Study Table",
    brand: "Urban Ladder",
    category: "Furniture",
    image: study_table,
    rentPerMonth: 899,
    securityDeposit: 1500,
    location: "Bangalore",
    description: "Spacious study table with storage drawers.",
    isAvailable: true,
  },
  {
    _id: "4",
    name: "Ergonomic Office Chair",
    brand: "Green Soul",
    category: "Furniture",
    image: office_chair,
    rentPerMonth: 699,
    securityDeposit: 1500,
    location: "Pune",
    description: "Comfortable office chair with adjustable height.",
    isAvailable: true,
  },
  {
    _id: "5",
    name: "Double Door Refrigerator",
    brand: "Samsung",
    category: "Appliance",
    image: refrigerator,
    rentPerMonth: 1899,
    securityDeposit: 3500,
    location: "Hyderabad",
    description: "Frost-free refrigerator with inverter technology.",
    isAvailable: true,
  },
  {
    _id: "6",
    name: "Front Load Washing Machine",
    brand: "LG",
    category: "Appliance",
    image: washing_machine,
    rentPerMonth: 1499,
    securityDeposit: 3000,
    location: "Noida",
    description: "7kg fully automatic washing machine.",
    isAvailable: true,
  },
  {
    _id: "7",
    name: 'Smart LED TV 43"',
    brand: "Sony",
    category: "Appliance",
    image: smart_tv,
    rentPerMonth: 1699,
    securityDeposit: 3500,
    location: "Chennai",
    description: "43-inch Full HD Smart Android TV.",
    isAvailable: true,
  },
  {
    _id: "8",
    name: "Microwave Oven",
    brand: "IFB",
    category: "Appliance",
    image: microwave,
    rentPerMonth: 699,
    securityDeposit: 1500,
    location: "Kolkata",
    description: "25L convection microwave oven.",
    isAvailable: true,
  },
  {
    _id: "9",
    name: "Dining Table Set",
    brand: "Home Centre",
    category: "Furniture",
    image: dining_table,
    rentPerMonth: 1599,
    securityDeposit: 3000,
    location: "Ahmedabad",
    description: "Elegant 4-seater wooden dining table set.",
    isAvailable: true,
  },
  {
    _id: "10",
    name: "Split Air Conditioner",
    brand: "Daikin",
    category: "Appliance",
    image: air_conditioner,
    rentPerMonth: 2199,
    securityDeposit: 4500,
    location: "Gurgaon",
    description: "1.5 Ton inverter split AC with fast cooling.",
    isAvailable: true,
  },
];

export const dummyMyBookingsData = [
  {
    _id: "B001",
    product: dummyProductData[0],
    user: "6847f7cab3d8daecdb517095",
    owner: "owner001",
    pickupDate: "2026-07-15T00:00:00.000Z",
    returnDate: "2026-08-15T00:00:00.000Z",
    status: "confirmed",
    price: 2499,
    createdAt: "2026-07-10T10:00:00.000Z",
  },
  {
    _id: "B002",
    product: dummyProductData[4],
    user: "6847f7cab3d8daecdb517095",
    owner: "owner001",
    pickupDate: "2026-07-18T00:00:00.000Z",
    returnDate: "2026-08-18T00:00:00.000Z",
    status: "pending",
    price: 1899,
    createdAt: "2026-07-11T09:30:00.000Z",
  },
  {
    _id: "B003",
    product: dummyProductData[7],
    user: "6847f7cab3d8daecdb517095",
    owner: "owner001",
    pickupDate: "2026-07-20T00:00:00.000Z",
    returnDate: "2026-08-20T00:00:00.000Z",
    status: "confirmed",
    price: 699,
    createdAt: "2026-07-12T11:20:00.000Z",
  },
  {
    _id: "B004",
    product: dummyProductData[9],
    user: "6847f7cab3d8daecdb517095",
    owner: "owner001",
    pickupDate: "2026-07-22T00:00:00.000Z",
    returnDate: "2026-08-22T00:00:00.000Z",
    status: "confirmed",
    price: 2199,
    createdAt: "2026-07-13T08:15:00.000Z",
  },
];


export const dummyRentalRequests = [

  {
    _id: "1",

    customerName: "Rahul Sharma",

    phone: "9876543210",

    status: "Pending",

    pickupDate: "2026-07-20",

    returnDate: "2026-08-20",

    amount: 2499,

    product: dummyProductData[0],
  },

  {
    _id: "2",

    customerName: "Priya Singh",

    phone: "9876501234",

    status: "Approved",

    pickupDate: "2026-07-12",

    returnDate: "2026-08-12",

    amount: 1899,

    product: dummyProductData[4],
  },

  {
    _id: "3",

    customerName: "Aman Verma",

    phone: "9876504444",

    status: "Rejected",

    pickupDate: "2026-07-18",

    returnDate: "2026-08-18",

    amount: 699,

    product: dummyProductData[7],
  },

  {
    _id: "4",

    customerName: "Neha Kapoor",

    phone: "9876512345",

    status: "Pending",

    pickupDate: "2026-07-22",

    returnDate: "2026-08-22",

    amount: 1599,

    product: dummyProductData[9],
  }

];