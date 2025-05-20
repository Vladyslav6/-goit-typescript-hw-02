import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchData } from "./services/api";
import { RingLoader } from "react-spinners";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

Modal.setAppElement(document.getElementById("root"));

function App() {
  const [photo, setPhoto] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleClick = (imgUrl) => {
    setCurrentImage(imgUrl);
    openModal();
  };

  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        const data = await fetchData(query, page, abortController.signal);
        setPhoto((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [query, page]);
  const handleChangeQwery = (newQwery) => {
    setQuery(newQwery);
    setPhoto([]);
    setPage(1);
  };

  return (
    <>
      <div>
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          currentImage={currentImage}
        />
        <SearchBar handleChangeQwery={handleChangeQwery} />
        <ImageGallery sendPhoto={photo} handleClick={handleClick} />
        {!isLoading && isError && <ErrorMessage />}
        {isLoading && <RingLoader color="#04f92b" />}
        {page < totalPages && !isLoading && (
          <LoadMoreBtn setPage={setPage} totalPages={totalPages} page={page} />
        )}
      </div>
    </>
  );
}

export default App;
