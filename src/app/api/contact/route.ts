import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Aqui você pode implementar o envio de email usando SendGrid
    // Por enquanto, vamos apenas simular o envio
    console.log('Email seria enviado para: contato@techsolutions.com.br');
    console.log('Dados do formulário:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.' 
    });
  } catch (error) {
    console.error('Erro ao processar formulário:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Erro ao enviar mensagem. Por favor, tente novamente.' 
    }, { status: 500 });
  }
}
