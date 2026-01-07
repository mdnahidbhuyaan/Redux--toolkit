import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
 
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlich";
import { useEffect } from "react";
import ResultCart from "./ResultCart";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, results, Loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if(!query) return
    const getData = async () => {
      try {
        dispatch(setLoading());
      
        let data = [];
        if (activeTab == "photo") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url:item.links.html
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url:item.url
          }));
        }
        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url:item.url
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    getData();
  }, [query, activeTab,dispatch]);

  if (error) return <h1>Error</h1>;
  if (Loading) return <h1>Loading...</h1>;

  return (
    <div className="flex flex-wrap justify-center gap-5 overflow-auto px-10">
      {results.map((item, idx) => {
        return <div key={idx}>
          {/* {item.title} */}
                      <ResultCart item={item}/>

        </div>
      })}
    </div>
  );
};

export default ResultGrid;
