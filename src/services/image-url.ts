const getCroppedImageUrl = (url: string) => {
    let target = 'media/';
    let index = url.indexOf(target) + target.length;
    let croppedURL = url.slice(0,index) + 'crop/600/400/' + url.slice(index);
    return croppedURL;
}

export default getCroppedImageUrl

