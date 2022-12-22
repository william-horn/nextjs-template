import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/buttons/Button';
import Container from '../components/Container';
import Icons from '../public/icons';

import Enum from '../enum';
import useLocalStorage from '../hooks/useLocalStorage'

export default function Home() {
  const [testLocalStorage, setTestLocalStorage] = useLocalStorage('test_key', 'initial_value');
  
  const updateLocalStorage = () => {
    console.log('updated value');
    setTestLocalStorage('updated_value');
  }
  
  return (
    <Container className="page">
      <h1 className="text-2xl">Page title</h1>
      <p>Some paragraph</p>


      <Button
      leftIcon={Icons.ArrowLeftIcon} 
      // className="bg-red-700"
      onClick={() => console.log('button was clicked')}>
        Test Button
      </Button>

      <Button
      leftIcon={Icons.GemIcon} 
      // className="bg-red-700"
      onClick={() => console.log('button was clicked')}>
        Test Button
      </Button>
      
    </Container>
  )
}
