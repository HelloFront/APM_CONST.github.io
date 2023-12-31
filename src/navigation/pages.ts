import {
  ArticleIcon,
  BookmarksIcon,
  HomeIcon,
  PhotoIcon,
} from "../assets/icons";
import {
  Home,
  Gallery,
  Contact,
  Services,
  TileFloors,
  KitchenBacksplashes,
  FirePlaces,
  CustomTileWork,
  Showers,
  Remodeling,
} from "../pages";

export const SERVICES_DROPDOWN = [
  {
    path: "/remodeling",
    component: Remodeling,
    name: "Remodeling",
  },
  {
    path: "/tile_floors",
    component: TileFloors,
    name: "Tile floors",
  },
  {
    path: "/kitchen_backsplashes",
    component: KitchenBacksplashes,
    name: "Kitchen backsplashes",
  },
  {
    path: "/fire_places",
    component: FirePlaces,
    name: "Fire Places",
  },
  {
    path: "/custom_tile_work",
    component: CustomTileWork,
    name: "Custom Tile Work",
  },
  {
    path: "/showers",
    component: Showers,
    name: "Showers",
  },
];

export const PAGES = [
  {
    path: "/",
    component: Home,
    name: "Home",
    icon: HomeIcon,
    sName: "sidebar-item",
  },
  {
    path: "/gallery",
    component: Gallery,
    name: "Gallery",
    icon: PhotoIcon,
    sName: "sidebar-item",
  },
  {
    path: "/services",
    component: Services,
    name: "Services",
    icon: ArticleIcon,
    sName: "sidebar-item",
  },
  {
    path: "/contacts",
    component: Contact,
    name: "Free Estimate",
    icon: BookmarksIcon,
    sName: "sidebar-item",
  },
];

export const NAVIGATION_ROUTES = [...PAGES, ...SERVICES_DROPDOWN];
