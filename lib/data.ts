import airbnbImg from "@/public/airbnb.png";
import ecommerceImg from "@/public/ecommerce.png";
import messengerImg from "@/public/messenger.png";
import pokemonImg from "@/public/pokemon.png";
import movixImg from "@/public/movix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Airbnb Clone",
    description:
      "this is an airbnb clone with many of its functionalities",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript", "Prisma"],
    imageUrl: airbnbImg,
    link: "https://airbnb-clone-peach-three.vercel.app/",
    githubLink: "https://github.com/SNEIDER1996/Airbnb-clone"
  },
  {
    title: "Ecommerce",
    description:
      "this is an ecommerce you can add to cart and has payment method",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "TypeScript", "Prisma"],
    imageUrl: ecommerceImg,
    link: "https://ecommerce-store-two-eta.vercel.app/",
    githubLink: "https://github.com/SNEIDER1996/ecommerce-store"
  },
  {
    title: "Movix App",
    description:
      "movies and series application",
    tags: ["React", "Sass", "JavaScript", "Redux"],
    imageUrl: movixImg,
    link: "https://movix-tan-nu.vercel.app/",
    githubLink: "https://github.com/SNEIDER1996/movix"
  },
  {
    title: "Pokemon App",
    description:
      "application that allows you to view all pokemon and add favorites",
    tags: ["React", "Next.js", "NextUi", "TypeScript"],
    imageUrl: pokemonImg,
    link: "https://pokemon-two-gamma.vercel.app/",
    githubLink: "https://github.com/SNEIDER1996/Pokemon"
  },
  {
    title: "Messenger clone",
    description:
      "this is an messenger clone with many of its functionalities",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript", "Prisma"],
    imageUrl: messengerImg,
    link: "https://messenger-clone-woad.vercel.app/",
    githubLink: "https://github.com/SNEIDER1996/messenger-clone"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Framer Motion",
] as const;