import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site';

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
                    backgroundColor: '#030014',
                    backgroundImage: 'radial-gradient(circle at 25px 25px, #ffffff 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ffffff 2%, transparent 0%)',
                    backgroundSize: '100px 100px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(3, 0, 20, 0.8)',
                        padding: '40px 80px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 0 50px rgba(120, 119, 198, 0.3)',
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: 20,
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '-0.05em',
                        }}
                    >
                        {siteConfig.name}
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            fontWeight: 600,
                            color: '#A1A1AA',
                            marginBottom: 40,
                            textAlign: 'center',
                            maxWidth: '800px',
                        }}
                    >
                        {siteConfig.title}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                        }}
                    >
                        <div
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#3b82f6',
                                color: 'white',
                                borderRadius: '999px',
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            Full Stack
                        </div>
                        <div
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#8b5cf6',
                                color: 'white',
                                borderRadius: '999px',
                                fontSize: 20,
                                fontWeight: 600,
                            }}
                        >
                            AI/ML Engineer
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
