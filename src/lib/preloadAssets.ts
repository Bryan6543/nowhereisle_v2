export const criticalAssets = {
  images: ["/", "/"],
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
