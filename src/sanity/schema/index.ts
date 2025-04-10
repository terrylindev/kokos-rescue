import type { SchemaTypeDefinition } from "sanity";
import homeCard from "./homeCard";
import heroText from "./heroText";
import about from "./about";
import contact from "./contact";
import cat from "./cat";
import donate from "./donate";
import adoption from "./adoption";
import googleForm from "./googleForm";
import OurText from "./ourText";
import foster from "./foster";
import fosterReasons from "./fosterReasons";
import successStory from "./successStory";
import faq from "./faq";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeCard, heroText, about, contact, cat, donate, adoption, googleForm, OurText, foster, fosterReasons, successStory, faq],
};