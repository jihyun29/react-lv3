import Button from './component/Button';
import Input from './component/Input';
import Modal from './component/Modal';
import Select from './component/Select';
import styled from 'styled-components';

const Layout = styled.div`
  display: block;
  margin: 8px;

`




function App() {
  return (
    <Layout>
      <Button/>
      <Input/>
      <Modal/>
      <Select/>
    </Layout>
  );
}

export default App;
