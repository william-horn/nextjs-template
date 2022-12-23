
import Container from "./Container";
import Text from "./typography/Text";
import buildClassName from "../lib/helpers/buildClassName";
import IconImage from "./IconImage";
import Enum from '../enum';
import useLocalStorage from '../hooks/useLocalStorage';
import { useState, useRef } from 'react';

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
  const [searchHistory, setSearchHistory] = useLocalStorage(
    Enum.StorageKeys.SearchHistory.value, []
  );

  const [searchState, setSearchState] = useState(Enum.Searchbar.Idle.value);
  const searchFieldRef = useRef(null);

  const onSearchFocus = () => {
  }

  const onSearchBlur = () => {
    setSearchHistory(prev => {
      const history = [searchFieldRef.current.value, ...prev]; 
      if (history.length > historySize) history.pop();

      return history;
    });
  } 

  console.log('Search history: ', searchHistory);

  const renderIcon = (src, size) =>
    <IconImage src={src} size={size}/>;

  return (
    <Container
    className={buildClassName({
      base: "p-2 flex items-center rounded",
      extend: className,
      remove
    })}>
      {renderIcon(leftIcon, leftIconSize)}

      <input 
      ref={searchFieldRef} 
      onFocus={onSearchFocus} 
      onBlur={onSearchBlur} 
      className="w-full h-full mx-2" 
      type="text" 
      placeholder={placeholder} 
      />

      {renderIcon(rightIcon, rightIconSize)}
    </Container>
  );
};

export default SearchBar;


