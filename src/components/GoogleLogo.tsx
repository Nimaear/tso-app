import styled from 'styled-components';
import Image from './Image';

const GoogleLogo = styled(Image)`
  width: 272px;
  height: 92px;
`;

GoogleLogo.defaultProps = {
  src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
}

export default GoogleLogo;