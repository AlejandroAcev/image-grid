import { ImageGrid } from "../components/ImageList";
import { ImageDetails } from "../pages/Home";

const GridResponseFormatter = {
  picsum: {
    list: (data: ImageDetails[]): ImageGrid[] =>
      data.map(image => (
        {
          imageUrl: image.download_url,
          author: image.author,
          rawData: image,
        }
      )),
    details: (data: ImageDetails): ImageGrid =>
      ({
        imageUrl: data.download_url,
        author: data.author,
        rawData: data,
      }),
  },
  rickandmorty: () => {}
}

export default GridResponseFormatter;