import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage: 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%), linear-gradient(-45deg, #1a1a1a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1a1a1a 75%), linear-gradient(-45deg, transparent 75%, #1a1a1a 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
        }}
      >
        {/* Logo ES estilizado */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              fontSize: '120px',
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
              letterSpacing: '8px',
            }}
          >
            ES
          </div>
        </div>

        {/* Nome */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#ffffff',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          Elias Santos
        </div>

                 {/* Descrição */}
         <div
           style={{
             fontSize: '24px',
             color: '#cccccc',
             textAlign: 'center',
             maxWidth: '800px',
             lineHeight: '1.4',
           }}
         >
           UX/UI Designer & Frontend Developer
         </div>

        {/* Elementos decorativos */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            right: '50px',
            width: '100px',
            height: '100px',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            opacity: '0.3',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            width: '80px',
            height: '80px',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            opacity: '0.2',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 