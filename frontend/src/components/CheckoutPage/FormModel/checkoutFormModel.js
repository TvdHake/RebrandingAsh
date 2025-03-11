export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'Nombre completo*',
      requiredErrorMsg: 'Se requiere nombre completo'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'El apellido es obligatorio'
    },
    address1: {
      name: 'address2',
      label: 'Endereço*',
      requiredErrorMsg: 'La dirección es obligatoria'
    },

    city: {
      name: 'city',
      label: 'Cidade*',
      requiredErrorMsg: 'La ciudad es obligatoria'
    },
    state: {
      name: 'state',
      label: 'Estado*',
      requiredErrorMsg: 'La ciudad es obligatoria'
    },
    zipcode: {
      name: 'zipcode',
      label: 'CEP*',
      requiredErrorMsg: 'Se requiere código postal',
      invalidErrorMsg: 'Formato de código postal no válido'
    },
    country: {
      name: 'country',
      label: 'País*',
      requiredErrorMsg: 'Se requiere país'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Utilice esta dirección para los detalles del pago'
    },
    invoiceId: {
      name: 'invoiceId',
      label: 'Utilice este ID de factura'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Se requiere el nombre en la tarjeta'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
