export interface SliderType {
  id: number;
  image: string;
  title: string;
}

export const homeHeroSlides: SliderType[] = [
  { id: 1, image: "/img-2.png", title: "chars_in_environment" },
  { id: 2, image: "/img-3.png", title: "red_tree_in_environment" },
  { id: 3, image: "/img-4.png", title: "lost_souls_expoloring" },
];

export const worldBuildingSlides: SliderType[] = [
  { id: 1, image: "/a-4.png", title: "chars_in_environment" },
  { id: 2, image: "/a-5.png", title: "red_tree_in_environment" },
  { id: 3, image: "/a-6.png", title: "lost_souls_expoloring" },
];

export const artisticObsessionSlides: SliderType[] = [
  { id: 1, image: "/sketch-rino.png", title: "chars_in_environment" },
  { id: 2, image: "/corrupt_wolf.png", title: "red_tree_in_environment" },
  { id: 3, image: "/a2-1.png", title: "chars_in_environment" },
  { id: 4, image: "/a2-2.png", title: "red_tree_in_environment" },
  { id: 5, image: "/a2-3.png", title: "chars_in_environment" },
  { id: 6, image: "/a2-4.png", title: "red_tree_in_environment" },
  { id: 7, image: "/a2-5.png", title: "chars_in_environment" },
];

export const playerExperienceSlides: SliderType[] = [
  { id: 1, image: "/art-1.png", title: "chars_in_environment" },
  { id: 2, image: "/glowing-tree.png", title: "red_tree_in_environment" },
  { id: 3, image: "/img-3s.png", title: "lost_souls_expoloring" },
];

export interface SoulsSliderType {
  id: number;
  width: number;
  height: number;
  image: string;
  title: string;
}

export const soulsCharactersSlides: SoulsSliderType[] = [
  {
    id: 1,
    image: "/chars/vicar_mixamo.png",
    title: "Vicar Mixamo",
    height: 828,
    width: 555,
  },
  {
    id: 1,
    image: "/chars/cadet_mixamo.png",
    title: "Cadet Mixamo",
    height: 608,
    width: 768,
  },
  {
    id: 1,
    image: "/chars/initiate_mixamo.png",
    title: "Initiate Mixamo",
    height: 748,
    width: 515,
  },
];
