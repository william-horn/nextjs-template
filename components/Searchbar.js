
import Container from "./Container";
import Text from "./typography/Text";
import buildClassName from "../lib/helpers/buildClassName";
import IconImage from "./IconImage";
import Button from "./buttons/Button";
import { useAppContext } from "../providers/AppProvider";
import Enum from '../enum';
import useLocalStorageRequest from "../hooks/useLocalStorageRequest";
// import useLocalStorageState from '../hooks/useLocalStorageState';
import { useState, useRef, useEffect } from 'react';

const SearchBar = ({
  className="", 
  remove, 
  placeholder, 
  historySize=3,
  leftIcon,
  rightIcon,
  leftIconSize="24px",
  rightIconSize="24px"
}) => {
  const { mouse } = useAppContext();

  // Get search history getters/setters for local storage
  const [getSearchHistory, updateSearchHistory] = useLocalStorageRequest(
    Enum.StorageKeys.SearchHistory.value, []
  );

  // Create search state for when the search bar is interacted with
  const [searchState, setSearchState] = useState(Enum.SearchState.Idle.value);
  const searchBarRef = useRef(null);
  const searchFieldRef = useRef(null);

  const searchUnfocus = (_, event) => {
    if (!event.path.some(el => el === searchBarRef.current)) {
      setSearchState(Enum.SearchState.Idle.value);
    }
  }

  useEffect(() => {
    mouse.down.connect({ handler: searchUnfocus });

    return () => {
      mouse.down.disconnect({ handler: searchUnfocus });
    }
  }, []);

  // When the search bar is focused
  const searchFocus = () => {
    setSearchState(Enum.SearchState.Focused.value);
  }

  // When a search is submitted in the search bar
  const onEnter = (event) => {
    if (event.key === Enum.KeyNames.Enter.value) {
      searchFieldRef.current.blur();
      
      updateSearchHistory(prev => {
        const history = [searchFieldRef.current.value, ...prev]; 
        if (history.length > historySize) history.pop();
  
        return history;
      });
    }
  }

  // The drop-down search results when the search bar is focused
  const renderSearchResults = () => {
    if (searchState === Enum.SearchState.Focused.value) {
      return (
        <Container className="absolute w-full bg-white rounded-b-md top-full z-[1000]">
          <Container className="px-2 py-1">
            <Button onClick={() => console.log('YES')}>Hello!</Button>
            <Text className="text-black">Hello world</Text>
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
        onFocus={searchFocus} 
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


