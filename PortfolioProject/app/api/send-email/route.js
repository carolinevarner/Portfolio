import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    console.log('Received form data:', { name, email, message: message.substring(0, 50) + '...' });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed - missing fields');
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'carolinevarner04@gmail.com',
        pass: 'dxalzlcnqzliqscp' // Your Gmail app password (spaces removed)
      }
    });

    // Verify connection configuration
    console.log('Verifying transporter configuration...');
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Email content
    const mailOptions = {
      from: 'carolinevarner04@gmail.com',
      to: 'carolinevarner04@gmail.com',
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #555; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              This message was sent from your portfolio contact form. 
              You can reply directly to this email to respond to ${name} at ${email}.
            </p>
          </div>
        </div>
      `
    };

    // Send email
    console.log('Sending email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return Response.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
