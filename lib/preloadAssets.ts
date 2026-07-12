export const criticalAssets = {
  images: ["/img-1.png", "/img-2.png", "/img-3.png"],
  videos: ["/"],
  fonts: [""],
} as const;

export const preloadAllAssets = async (): Promise<void> => {
  const { images } = criticalAssets;

  const imagePromises = images.map((src) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => {
        console.warn(`Failed to preload: ${src}`);
        resolve();
      };
    });
  });

  await Promise.all(imagePromises);
};
