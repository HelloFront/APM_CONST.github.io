import { IProject, IService } from "../types/project";
import { ITestimonial } from "../types/testimonial";

export const MOCK_DATA_LAST_PROJECTS: IProject[] = [
  {
    id: 1,
    name: "Classic Court",
    imageSourse: require("../assets/images/main_bg_image.png"),
  },
  {
    id: 2,
    name: "Will Rose Lane",
    imageSourse: require("../assets/images/main_bg_image.png"),
  },
  {
    id: 3,
    name: "Shannon Run Road",
    imageSourse: require("../assets/images/main_bg_image.png"),
  },
];

export const MOCK_DATA_NEW_PLANS: IService[] = [
  {
    id: 1,
    name: "Tile floors",
    imageSourse: require("../assets/images/tile_floor.jpeg"),
    path: "/tile_floors",
  },
  {
    id: 2,
    name: "Kitchen backsplashes",
    imageSourse: require("../assets/images/kitchen_backsplash.jpeg"),
    path: "/kitchen_backsplashes",
  },
  {
    id: 3,
    name: "Custom tile work",
    imageSourse: require("../assets/images/custom_tile_work.jpeg"),
    path: "/custom_tile_work",
  },
  {
    id: 4,
    name: "SHOWERS",
    imageSourse: require("../assets/images/showers.jpeg"),
    path: "/showers",
  },
];

export const MOCK_DATA_TESTIMONIALS: ITestimonial[] = [
  {
    message: ` “We love our forever home! Our contractor Robert DeArmond worked with
      us from purchasing the house plan, itemizing budgets, to the final
      inspection prior to moving in. He was fully involved in providing
      quality sub-contractors and was on the work siteregularly evaluating
      thier progress. His experience was invaluable in executing changes to
      the house plan in order to meetour desires. We recommend Robert
      DeArmond Hombuilders to provide you with a quality home”`,
    author: "A & M Pascal",
    authorStatus: "Homeowners",
  },
  {
    message: `“We have been extreamly pleased with our custom built home by DeArmond Homebuilders. With Robert as our general contractor, the process went very smoothly. We have a well being house, with extra touches we were looking for, from structural to cosmetic. We would definitely use DeArmond Homebuilders in the future”`,
    author: "S & R Dixon",
    authorStatus: "Homeowners",
  },
  {
    message: `“When we built our new home, we didn’t even take bids from other contractors, because of the quality craftsmanship, attetion to detail, and the continual involvement we had experienced with Robert on previous remodeling projects. Robert is great to provide perspective on design elements or structural components, always working to help the homeowner understand the benefits or the challenges that could be faced with various options, including the costs associated. The trust and relationship we developed with Robert helped us make the best decisions and build the home we’d always wanted, without any of the worries or stress. Five years later we couldn’t be happier with our results!”`,
    author: "M & D Duckworth",
    authorStatus: "Homeowners",
  },
  {
    message: `“Trust is the most important factor in choosing a home builder, and I trust Robert DeArmond. He demands excellence and pays attention to even the smallest detail. I’m proud of the house Robert custom-built for me.”`,
    author: "F Wellman",
    authorStatus: "Homeowners",
  },
  {
    message: `“Robert’s personal integrity paired with his dedication to his profession made the building process enjoyable and rewarding. We are extremely pleased with the home we built with Robert and wouldn’t consider starting another home construction project without him.”`,
    author: "R Teater",
    authorStatus: "Homeowners",
  },
];

export const MOCK_DATA_SERVICE_PAGES = {
  TILE_FLOORS: {
    pageTitle: "Tile floors",
    imageSourse: require("../assets/images/tile_floor.jpeg"),
    description:
      "Whether you have existing flooring or need slab work done directly in a new construction setting, we have the products and professional skills, and experience to get the job done right. Our team specializes in tile floors in a wide array of colors, materials, and styles that match any home decorating scheme. \n \n Increase the value, appearance, and maintenance needs of your kitchen, bathrooms, or any other room in the house. Tile offers versatile options for anyone who wants an attractive and easy to care for floor. It is exceptionally popular in rooms that get a lot of traffic and moisture.",
  },
  KITCHEN_BACKSPLASHES: {
    pageTitle: "Kitchen backsplashes",
    imageSourse: require("../assets/images/kitchen_backsplash.jpeg"),
    description: `After having a new tile floor installed in the kitchen, and perhaps investing in cabinetry and countertops, the kitchen backsplash offers a finishing touch with a unique option for style. Even if you keep all your existing features, replacing the tile work on the bottom part of the wall beyond the counter is a great idea. \n \n This spot allows for amazing creativity with accent tiles or a clean finish with more traditional options. It is a great way to add a splash of color, pattern, or luxury options without breaking your overall remodeling budget. We do it all so you get the high-value and low-maintenance kitchen you have always dreamed of.`,
  },
  FIRE_PLACES: {
    pageTitle: "Fire places",
    imageSourse: require("../assets/images/firePlace.jpeg"),
    description:
      "Bring your living room or den up to date with a new tile work surround for a fireplace. These focal points offer amazing style and warmth for cozy spaces in your home, but the wrong backdrop will ruin the aesthetic and can clash with your decorating style. \n \n Explore the amazing options we offer for tile work around fireplaces. It adds not only true beauty and elegance but a safe alternative to older products and those unsuitable for generated heat.",
  },
  SHOWERS: {
    pageTitle: "SHOWERS",
    imageSourse: require("../assets/images/showers.jpeg"),
    description:
      "Nowhere in the home is tile work more popular as a flooring and feature option than in the bathroom. These frequently used rooms in the house are also the ones most likely to experience damage from water seeping through cracks or poorly grouted tiles. If you have any of these issues with your existing shower and tub surrounds, serious problems may occur. This is just one reason why you should consider brand-new tile for your bathroom. \n \n The other reason comes down to pure style. Allow us to help transform your en suite into a luxurious spa experience with the most attractive tiles and accent work available. Choose from a wide selection of versatile neutrals or inject a sense of fun and creativity with colored tiles of all types. We offer exceptional work for shower and tub surrounds that increase your enjoyment of your home and its overall value.",
  },
  CUSTOM_TILE_WORK: {
    pageTitle: "Custom tile work",
    imageSourse: require("../assets/images/custom_tile_work.jpeg"),
    description:
      "For the perfect finish in your kitchen, bath, or anywhere, custom work adds exceptional quality to any project. Options include seamless tile installation without obvious grout lines through mitering and epoxy color matching. The edges of the tile adhere together for a smooth look. In bathrooms, enjoy custom-matched drains, heated shower pans for maximum comfort, and tile or slab benches, shelves, and wall nooks for your convenience. With the extra care used for exquisite detail, you can enjoy a step beyond our already excellent work. Tile vein match and book match corners are also available with custom work orders.",
  },
};
