import React, { Component } from 'react'; 
import { useTranslation } from 'react-i18next';

function BotonInactivar() {
    const i18n = useTranslation();
        return (
            <button type="button" className="btn btn-danger" style={{marginBottom: "10px", width: "130px"}}>
                <svg class="bi bi-eye-slash-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z"/>
                <path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z"/>
                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" clip-rule="evenodd"/>
                </svg>
                &nbsp; {i18n.t('inactive')}
            </button>
        );
}

export default BotonInactivar;