import logo from './logo.svg';
import './App.css';
import Button from './functional-components/button';
import TableComponent from './class-components/table';
import ListComponent from './props/list';
import ImageComponent from './image-components/images';
import ImageComponents from './image-props-practise/ImageComponent';
import Krushika from './30-3Saturday/riv';
import CustomButton from './Day4-childrenprops/CustomButton';


function App() {
  return (
    <div >
      {/* <Button/> */}
      {/* <TableComponent/>
      <ListComponent/> */}
      {/* <ImageComponent/>  */}
      {/* <ImageComponents/>
      <Krushika/> */}
      <CustomButton text={"login"}/>
  
     
      <CustomButton text={"signup"}/>
    </div>
  );
}

export default App;
