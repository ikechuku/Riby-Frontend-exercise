import { render } from "@testing-library/react";
import Cardlist from "./index";

test("renders list of gifs correctly", () => {
  let data = {
    type: "gif",
    id: "26FPEW1BVHckbjpDi",
    url: "https://giphy.com/gifs/vice-spain-26FPEW1BVHckbjpDi",
    slug: "vice-spain-26FPEW1BVHckbjpDi",
    bitly_gif_url: "http://gph.is/1QVh2Xi",
    bitly_url: "http://gph.is/1QVh2Xi",
    embed_url: "https://giphy.com/embed/26FPEW1BVHckbjpDi",
    username: "vice_spain",
    source: "",
    title: "snow boss GIF by VICE Media Spain",
    rating: "g",
    content_url: "http://www.vice.com/es/video/iceman",
    source_tld: "",
    source_post_url: "",
    is_sticker: 0,
    import_datetime: "2016-02-22 14:58:54",
    trending_datetime: "0000-00-00 00:00:00",
    images: {
      original: {
        height: "270",
        width: "480",
        size: "2927675",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy.gif",
        mp4_size: "458944",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy.mp4",
        webp_size: "993042",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy.webp",
        frames: "67",
        hash: "18f260858be16ae4de46442a49241afc",
      },
      downsized: {
        height: "270",
        width: "480",
        size: "1813055",
        url:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-downsized.gif",
      },
      downsized_large: {
        height: "270",
        width: "480",
        size: "2927675",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy.gif",
      },
      downsized_medium: {
        height: "270",
        width: "480",
        size: "2035311",
        url:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-downsized-medium.gif",
      },
      downsized_small: {
        height: "176",
        width: "312",
        mp4_size: "89415",
        mp4:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-downsized-small.mp4",
      },
      downsized_still: {
        height: "270",
        width: "480",
        size: "27269",
        url:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-downsized_s.gif",
      },
      fixed_height: {
        height: "200",
        width: "356",
        size: "1305878",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200.gif",
        mp4_size: "245772",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200.mp4",
        webp_size: "620478",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200.webp",
      },
      fixed_height_downsampled: {
        height: "200",
        width: "356",
        size: "123615",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200_d.gif",
        webp_size: "83812",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200_d.webp",
      },
      fixed_height_small: {
        height: "100",
        width: "178",
        size: "401479",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100.gif",
        mp4_size: "80561",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100.mp4",
        webp_size: "211990",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100.webp",
      },
      fixed_height_small_still: {
        height: "100",
        width: "178",
        size: "7655",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100_s.gif",
      },
      fixed_height_still: {
        height: "200",
        width: "356",
        size: "19969",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200_s.gif",
      },
      fixed_width: {
        height: "113",
        width: "200",
        size: "504912",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200w.gif",
        mp4_size: "92088",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200w.mp4",
        webp_size: "240078",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200w.webp",
      },
      fixed_width_downsampled: {
        height: "113",
        width: "200",
        size: "45570",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200w_d.gif",
        webp_size: "30124",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200w_d.webp",
      },
      fixed_width_small: {
        height: "57",
        width: "100",
        size: "167767",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100w.gif",
        mp4_size: "31545",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100w.mp4",
        webp_size: "87602",
        webp: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100w.webp",
      },
      fixed_width_small_still: {
        height: "57",
        width: "100",
        size: "3293",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/100w_s.gif",
      },
      fixed_width_still: {
        height: "113",
        width: "200",
        size: "10065",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/200w_s.gif",
      },
      looping: {
        mp4_size: "1539587",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-loop.mp4",
      },
      original_still: {
        height: "270",
        width: "480",
        size: "76226",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy_s.gif",
      },
      original_mp4: {
        height: "270",
        width: "480",
        mp4_size: "458944",
        mp4: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy.mp4",
      },
      preview: {
        height: "200",
        width: "355",
        mp4_size: "34176",
        mp4:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-preview.mp4",
      },
      preview_gif: {
        height: "54",
        width: "96",
        size: "49166",
        url:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-preview.gif",
      },
      preview_webp: {
        height: "124",
        width: "220",
        size: "42644",
        url:
          "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/giphy-preview.webp",
      },
      "480w_still": {
        height: "270",
        width: "480",
        size: "2927675",
        url: "https://media4.giphy.com/media/26FPEW1BVHckbjpDi/480w_s.jpg",
      },
    },
    user: {
      avatar_url:
        "https://media2.giphy.com/avatars/vice_spain/eJnZM4N4hf10.jpeg",
      banner_image:
        "https://media2.giphy.com/headers/vice_spain/mRmviJjvwC8N.gif",
      banner_url:
        "https://media2.giphy.com/headers/vice_spain/mRmviJjvwC8N.gif",
      profile_url: "https://giphy.com/vice_spain/",
      username: "vice_spain",
      display_name: "VICE España",
      description: "",
      instagram_url: "https://instagram.com/vice_spain",
      website_url: "https://www.vice.com/es",
      is_verified: true,
    },
  };
  const div = document.createElement("div");
  render(<Cardlist data={data} id={3} />, div);
});
