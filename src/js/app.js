import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
});