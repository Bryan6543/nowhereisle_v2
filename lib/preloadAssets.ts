export const criticalAssets = {
  images: ["/logo.png", "/logo2.png"],
  videos: [] as string[],
  fonts: [] as string[],
} as const;

export const preloadAllAssets = async (): Promise<void> => {
  const imagePromises = criticalAssets.images.map((src) => {
    return new Promise<void>((resolve) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
  });

  await Promise.all(imagePromises);
};