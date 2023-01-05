const API_URL = "http://localhost:3500/items";
const [items, setItems] = useState([]);
const [fetchError, setFetchError] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Did Not Receive Expected data");
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  (async () => await fetchItems())();
}, []);
