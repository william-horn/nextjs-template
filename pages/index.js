import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/buttons/Button';
import Enum from '../enum';

import useLocalStorage from '../hooks/useLocalStorage'

export default function Home() {
  const [testLocalStorage, setTestLocalStorage] = useLocalStorage('test_key', 'initial_value');
  
  const updateLocalStorage = () => {
    console.log('updated value');
    setTestLocalStorage('updated_value');
  }

  console.log('local storage data: ', testLocalStorage);
  console.log('enum storage key: ', Enum.StorageKeys.Theme.value);

  return (
    <>
      <p>Test</p>
      <button onClick={updateLocalStorage}>Local storage test</button>
    </>
  )
}
