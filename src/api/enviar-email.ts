import express, { Request, Response, Router } from 'express';
import nodemailer from 'nodemailer';

const router: Router = express.Router();

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

router.post(
  '/enviar-email',
  async (req: Request<{}, {}, FormData>, res: Response) => {
    const { name, email, phone, message } = req.body;

    // Configurar el transporte de correo
    let transporter = nodemailer.createTransport({
      // Configura aquí tu servicio de correo
    });

    // Opciones del correo
    let mailOptions: nodemailer.SendMailOptions = {
      from: 'no-reply@gobio.com.ar',
      to: 'hola@gobio.com.ar',
      subject: 'Nuevo mensaje de formulario de contacto',
      text: `
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone}
      Mensaje: ${message}
    `,
    };

    try {
      // Enviar el correo
      await transporter.sendMail(mailOptions);
      res.status(200).send('Correo enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo');
    }
  }
);

export default router;
