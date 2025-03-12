import {createTransport} from 'nodemailer'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    const transporter = createTransport({
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        secure: true,
        auth: {
            user: config.SMTP_USER,
            pass: config.SMTP_PASS
        }
    })

    const mailOptions = {
        from: `"${body.name}" <${body.email}>`,
        to: 'hello@secureops-solutions.tech',
        subject: `New Contact Form Submission - SecureOps`,
        text: `
Name: ${body.name}
Email: ${body.email}
Company: ${body.company}
Phone: ${body.phone}

Message:
${body.message}
    `,
        html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Company:</strong> ${body.company}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    `
    }

    await transporter.sendMail(mailOptions)

    return {success: true}
})
