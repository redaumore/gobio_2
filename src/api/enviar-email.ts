interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const enviarEmail = async (
  datosFormulario: FormData,
  captchaValue: string
) => {
  const apiUrl = '/api/enviar-email'; // Ajusta esta URL según tu configuración

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosFormulario,
        captchaValue,
      }),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();
    return data.mensaje;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('Error al enviar el correo');
  }
};
