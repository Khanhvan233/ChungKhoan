import Sidebar from '../../Components/Sidebar/Sidebar';
import './Home.css'
import ModalComponent from '../../Components/ModalComponet/ModalComponent';
import TableComponent from '../../Components/TableNV/TableComponent';
import Buy from '../../Components/Buy/Buy';
import Cell from '../../Components/Sell/Sell'
const Home = () => {
  return (
    <div className='home'>
      <Buy/>
      <Cell/>
    </div>
  )
}

export default Home