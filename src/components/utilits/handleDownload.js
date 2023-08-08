export const handleDownload = (file) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = '3D_models.max';
    link.click();
};