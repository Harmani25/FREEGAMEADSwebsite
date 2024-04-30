import "./styles/main.scss";
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import store from "./redux/store/store";
import { ChakraProvider } from '@chakra-ui/react'





function App() {

 
  return (
    <div className="App">
    <Provider store={store}>
      <ChakraProvider>
        
          <AppRouter />
  
      </ChakraProvider>
    </Provider>
  </div>
  )
}

export default App
