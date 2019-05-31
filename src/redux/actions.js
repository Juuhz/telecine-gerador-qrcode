// Tipos de Actions
export const actionTypes = {
    LOADER_STATUS: 'LOADER_STATUS',
    SHOW_QRCODE: 'SHOW_QRCODE',
}

// Action que exibe/esconde o Loader e o QR Code
export const showLoader = () => {
    return { type: actionTypes.LOADER_STATUS }
}

// Action que exibe o QR Code e esconde o Loader
export const showQRCode = ( url ) => {
    return { 
        type: actionTypes.SHOW_QRCODE, imageUrl: url
    }
}