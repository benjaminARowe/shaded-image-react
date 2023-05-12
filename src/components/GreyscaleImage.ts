import { createComponent } from "@lit-labs/react";
import * as ShadedImage from "shaded-image";
import React from "react";
export const GreyscaleImage = createComponent({
  tagName: "si-greyscale-image",
  elementClass: ShadedImage.GreyscaleImage,
  react: React,
});
