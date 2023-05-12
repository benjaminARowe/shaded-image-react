import { createComponent } from "@lit-labs/react";
import * as ShadedImage from "shaded-image";
import React from "react";
export const GreyscaleImage = createComponent({
  tagName: "si-shaded-image",
  elementClass: ShadedImage.ShadedImage,
  react: React,
});
