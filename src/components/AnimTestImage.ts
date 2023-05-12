import { createComponent } from "@lit-labs/react";
import * as ShadedImage from "shaded-image";
import React from "react";
export const GreyscaleImage = createComponent({
  tagName: "si-anim-test-image",
  elementClass: ShadedImage.AnimTestImage,
  react: React,
});
