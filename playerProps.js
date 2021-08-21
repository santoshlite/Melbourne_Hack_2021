const duration = 548;

const sources = {
  hd: {
    bitrate: 2005,
    size: 46723282,
    duration,
    format: "mp4",
    width: 1280,
    height: 100,
    play_url: "https://vod-progressive.akamaized.net/exp=1629334609~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2819%2F23%2F589099484%2F2778665766.mp4~hmac=f3ed312d32c50739002e9d1b24559f5e2aae5a5ef8650860e30fdf242fba642c/vimeo-prod-skyfire-std-us/01/2819/23/589099484/2778665766.mp4"
  },
  sd: {
    bitrate: 900.49,
    size: 20633151,
    duration,
    format: "mp4",
    width: 320,
    height: 40,
    play_url: "https://vod-progressive.akamaized.net/exp=1629334609~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2819%2F23%2F589099484%2F2778665766.mp4~hmac=f3ed312d32c50739002e9d1b24559f5e2aae5a5ef8650860e30fdf242fba642c/vimeo-prod-skyfire-std-us/01/2819/23/589099484/2778665766.mp4"
  }
};

const props = {
  id: "OverSimplified History",
  title: "OverSimplified History",
  cover: "https://www.creatorhandbook.net/wp-content/uploads/sites/3/2020/09/Asset_1_2048x2048.png",
  duration,
  sources,
  src: "https://vod-progressive.akamaized.net/exp=1629334609~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2819%2F23%2F589099484%2F2778665766.mp4~hmac=f3ed312d32c50739002e9d1b24559f5e2aae5a5ef8650860e30fdf242fba642c/vimeo-prod-skyfire-std-us/01/2819/23/589099484/2778665766.mp4"
};

export default props;
