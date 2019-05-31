// Import Redux
import { connect } from 'react-redux';

// Import Components
import Page from '../components/template/page';
import Logo from '../components/logo';
import Title from '../components/title';
import Form from '../components/form';
import Loader from '../components/loader';
import QRCode from '../components/qrcode';

// Import Utils
import { Wrapper, Container } from '../utils/class';

const Home = ({ loaderStatus, imageStatus, imageUrl, formStatus }) => (
  <Page>
    <Wrapper>
      <Container>
        <Logo />
        {
          !imageStatus &&
            <Title>Gere QR Code com a marca Telecine</Title>
        }
        {
          formStatus &&
            <Form />
        }
        {
          loaderStatus &&
            <Loader />
        }
        {
          imageStatus &&
            <QRCode url={imageUrl} />
        }
      </Container>
    </Wrapper>
  </Page>
);

function mapStateToProps (state) {
  const { loaderStatus, imageStatus, imageUrl, formStatus } = state
  return { loaderStatus, imageStatus, imageUrl, formStatus }
}

export default connect(mapStateToProps)(Home)