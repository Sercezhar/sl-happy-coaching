export function playVideo() {
  const thumb = document.querySelector('.sales-features__thumb');
  const iframe = document.querySelector('iframe');

  thumb.addEventListener('click', () => {
    const videoSrc = iframe.src;
    const enableAutoplay = videoSrc + '?autoplay=1';

    iframe.src = enableAutoplay;
    thumb.style.pointerEvents = 'none';
    thumb.style.opacity = '0';
  });
}
