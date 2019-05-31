// Import Style
import { 
    QRImage, Actions, Action
} from './styled';

const QRCode = ({ url }) => (
    <>
        <QRImage src={url} alt='QR Code Telecine' title='QR Code Telecine' />
        <Actions>
            <Action>Download</Action>
            <Action>Gerar Novo</Action>
        </Actions>
    </>
);

export default QRCode;