import logo from './logo.svg';
import './App.css';
import Button from './functional-components/button';
import TableComponent from './class-components/table';
import ListComponent from './props/list';
import ImageComponent from './image-components/images';
import ImageComponents from './image-props-practise/ImageComponent';
import Krushika from './30-3Saturday/riv';
import CustomButton from './Day4-childrenprops/CustomButton';
import Greeting from './Day4-childrenprops/greeting';
import ListShow from './Day4-childrenprops/task1';


function App() {
  return (
    <>
      {/* <Button/> */}
      {/* <TableComponent/>
      <ListComponent/> */}
      {/* <ImageComponent/>  */}
      {/* <ImageComponents/>
      <Krushika/> */}
      {/* <CustomButton text={"login"}/> */}
  
     
      {/* <CustomButton>
        SignUp
        
      </CustomButton> */}
      {/* <Greeting>
       <h1> good morning</h1>
      </Greeting>
      <Greeting>
        good evening
      </Greeting> */}

      <ListShow/>
      
    </>
  );
}

export default App;
