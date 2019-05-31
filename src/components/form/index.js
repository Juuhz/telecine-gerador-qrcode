// Imports React Defaults
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Actions Redux
import { showLoader, showQRCode } from '../../redux/actions';

// Import Style
import { 
    FormBox, Input, Button
} from './styled';

class Form extends Component {
    
    // Evento para gerar o QR Code
    sendForm = async ( form ) => {
        // previni refresh na página
        form.preventDefault();

        // Chama Loader
        this.props.showLoader(true);

        // Simula requisição para enviar os dados
        const response = await new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                   success: true,
                   mensage: ""
              });
            }, 3000);
        });

        // Caso tenha retornado sucesso, exibe mensagem de sucesso
        if( response.success ){
            this.props.showQRCode( 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=http://telecineplay.com.br' );
        }

    }

    render() {
        return(            
            <FormBox onSubmit={this.sendForm}>
                <Input type="text" name="url" placeholder="Informe a URL" />
                <Button>Gerar</Button>
            </FormBox>
        );
    }
};

function mapStateToProps ( state ) {
    const { loaderStatus } = state;
    return { loaderStatus }
}

const mapDispatchToProps = dispatch => bindActionCreators({ showLoader, showQRCode }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);