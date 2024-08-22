import type { SchemaTypeDefinition } from "sanity";
import homeCard from "./homeCard";
import heroText from "./heroText";
import about from "./about";
import contact from "./contact";
import cat from "./cat";
import donate from "./donate";
import adoption from "./adoption";
import googleForm from "./googleForm";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeCard, heroText, about, contact, cat, donate, adoption, googleForm],
};