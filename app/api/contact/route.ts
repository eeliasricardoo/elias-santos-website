import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validação dos campos
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    // Enviar e-mail usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Site Portfolio <onboarding@resend.dev>', // Você pode mudar para seu domínio verificado
      to: ['eeliasricardoo@gmail.com'],
      subject: `Novo contato do site: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
              📧 Novo Contato do Site
            </h1>
            <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">
              Alguém entrou em contato através do seu portfolio
            </p>
          </div>

          <!-- Content -->
          <div style="padding: 40px;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 30px; border-left: 4px solid #667eea;">
              <h3 style="color: #333; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">👤</span>
                Detalhes do Contato
              </h3>
              
              <div style="display: grid; gap: 15px;">
                <div style="display: flex; align-items: center;">
                  <strong style="color: #667eea; min-width: 80px;">Nome:</strong>
                  <span style="color: #333; margin-left: 10px;">${name}</span>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <strong style="color: #667eea; min-width: 80px;">E-mail:</strong>
                  <span style="color: #333; margin-left: 10px;">${email}</span>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <strong style="color: #667eea; min-width: 80px;">Assunto:</strong>
                  <span style="color: #333; margin-left: 10px;">${subject}</span>
                </div>
              </div>
            </div>
            
            <div style="background-color: white; padding: 25px; border-radius: 10px; border: 1px solid #e9ecef;">
              <h4 style="color: #333; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;">
                <span style="margin-right: 10px;">💬</span>
                Mensagem
              </h4>
              <div style="color: #555; line-height: 1.6; font-size: 16px; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
            <p style="color: #666; margin: 0; font-size: 14px;">
              Este e-mail foi enviado através do formulário de contato do seu portfolio
            </p>
            <p style="color: #999; margin: 5px 0 0 0; font-size: 12px;">
              Data: ${new Date().toLocaleString('pt-BR', { 
                day: '2-digit', 
                month: '2-digit', 
                year: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('Erro do Resend:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar e-mail. Tente novamente.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erro ao enviar e-mail:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail. Tente novamente.' },
      { status: 500 }
    )
  }
} 