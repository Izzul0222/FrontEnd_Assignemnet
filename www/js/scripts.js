function navigateToVideo(videoId) {
    const videoUrls = {
      'example1': 'https://youtu.be/9h9S9kD67-Q?si=-WubSN7bmeVMw-5Y', // Replace with actual video URL
      'example2': 'https://youtu.be/UheajlsZ72E?si=dlyKfCquiHlpg5Bz', // Replace with actual video URL
      'example3': 'https://youtu.be/kdpHMdFScm8?si=ITA9ocLyRfxHVPsn'  // Replace with actual video URL
    };
  
    if (videoUrls[videoId]) {
      window.location.href = videoUrls[videoId];
    } else {
      alert('Video not found!');
    }
  }
  