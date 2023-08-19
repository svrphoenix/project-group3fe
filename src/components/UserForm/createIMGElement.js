export const createIMGElement = event => {
  const files = event.target.files;
  const img = document.createElement('img');
  img.src = window.URL.createObjectURL(files[0]);
  img.height = 60;
  img.onload = function () {
    window.URL.revokeObjectURL(this.src);
  };
  return img;
};
