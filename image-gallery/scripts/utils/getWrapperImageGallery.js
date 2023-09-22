const getWrapperImageGallery = () => {
  const containerImageGallery = document.querySelector('.image-gallery');
  containerImageGallery.innerHTML = '';
  return containerImageGallery;
};

export default getWrapperImageGallery;
