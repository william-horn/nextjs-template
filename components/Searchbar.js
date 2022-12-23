
import Container from "./Container";
import Text from "./typography/Text";
import buildClassName from "../lib/helpers/buildClassName";
import IconImage from "./IconImage";
import Button from "./buttons/Button";
// import { useAppContext } from "../providers/AppProvider";
import Enum from '../enum';
import removeExtraWhitespace from "../lib/helpers/removeExtraWhitespace";
import useLocalStorageRequest from "../hooks/useLocalStorageRequest";
import { v4 as uuidv4 } from 'uuid';
// import useLocalStorageState from '../hooks/useLocalStorageState';
import { useState, useRef, useEffect } from 'react';

const SearchBar = ({
  className="", 
  remove, 
  placeholder, 
  onSearch=search => console.log('searched for: ', search),
  historyDomain=Enum.StorageKeys.SearchHistoryDomain.Primary.value,
  historySize=3,
  leftIcon,
  rightIcon,
  leftIconSize="24px",
  rightIconSize="24px"
}) => {
  // Get search history getters/setters for local storage
  const [getSearchHistory, updateSearchHistory] = useLocalStorageRequest(
    Enum.StorageKeys.SearchHistory.value, { [historyDomain]: [] }
  );

  // Create search state for when the search bar is interacted with
  const [searchState, setSearchState] = useState(Enum.SearchState.Idle.value);
  const searchBarRef = useRef(null);
  const searchFieldRef = useRef(null);

  // Force unfocus on search bar
  const unfocusSearch = () => {
    searchFieldRef.current.blur();
    setSearchState(Enum.SearchState.Idle.value);
  }

  // When search bar is unfocused
  const onSearchUnfocus = (event) => {
    if (!event.path.some(el => el === searchBarRef.current)) {
      unfocusSearch();
    }
  }

  // Window events for detecting when using is unfocusing the search bar
  useEffect(() => {
    window.addEventListener('mousedown', onSearchUnfocus);
    window.addEventListener('blur', unfocusSearch);
    return () => {
      window.removeEventListener('mousedown', onSearchUnfocus);
      window.removeEventListener('blur', unfocusSearch);
    }
  }, []);

  // When the search bar is focused
  const onSearchFocus = () => {
    setSearchState(Enum.SearchState.Focused.value);
  }

  const filterSearch = (searchQuery) => {
    unfocusSearch();
    const filteredQuery = removeExtraWhitespace(searchQuery);

    // todo: handle duplicate search results in the local history
    updateSearchHistory(prev => {
      const old = prev[historyDomain] || [];
      let history = [searchFieldRef.current.value, ...old]; 

      if (history.length > historySize) history = history.slice(0, historySize);
      return {...prev, [historyDomain]: history };
    });
    
    onSearch(filteredQuery);
  }

  const onSearchResultQuery = (result) => {
    searchFieldRef.current.value = result;
    filterSearch(result);
  }

  // When a search is submitted in the search bar
  const onEnter = (event) => {
    if (event.key === Enum.KeyNames.Enter.value) {
      filterSearch(searchFieldRef.current.value);
    }
  }

  const renderSearchResult = (result) => (
    <Button 
    key={uuidv4()}
    onClick={() => onSearchResultQuery(result)}
    className="w-full p-1 text-left text-black transition-colors duration-200 rounded cursor-default hover:bg-gray-200" 
    remove="all">
      {result}
    </Button>
  );

  // The drop-down search results when the search bar is focused
  const renderSearchResults = () => {
    if (searchState === Enum.SearchState.Focused.value) {
      return (
        <Container className="absolute w-full bg-white rounded-b-md top-full z-[1000]">
          <Container className="px-3 py-2 overflow-y-auto max-h-[200px]">
            {
              getSearchHistory(historyDomain).map(result => {
                return renderSearchResult(result);
              })
            }
          </Container>
        </Container>
      );
    }

    return <></>;
  }

  // Un-round bottom corners of search bar when focused
  let searchBarClass = 'relative rounded';

  if (searchState === Enum.SearchState.Focused.value) {
    searchBarClass = buildClassName({ 
      base: searchBarClass, 
      extend: 'rounded-b-none',
    });
  }

  return (
    <Container
    ref={searchBarRef}
    className={buildClassName({
      base: searchBarClass,
      extend: className,
      remove
    })}>
      {renderSearchResults()}
      
      <Container className="flex items-center p-2">
        <IconImage src={leftIcon} size={leftIconSize}/>

        <input 
        ref={searchFieldRef} 
        onKeyUp={onEnter}
        onFocus={onSearchFocus} 
        className="w-full h-full mx-2" 
        type="text" 
        placeholder={placeholder} 
        />

        <IconImage src={rightIcon} size={rightIconSize}/>
      </Container>
    </Container>
  );
};

export default SearchBar;


