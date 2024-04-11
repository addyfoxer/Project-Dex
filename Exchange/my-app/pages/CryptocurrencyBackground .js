import React, { useRef, useEffect } from 'react';

const CryptocurrencyBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Cryptocurrency symbols
        const symbols = ['BTC', 'ETH', 'XRP', 'LTC', 'ADA', 'XLM', 'DOT', 'LINK', 'BNB'];

        // Function to draw cryptocurrency symbols
        const drawCryptos = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            symbols.forEach(symbol => {
                ctx.fillStyle = '#ffffff'; // White color for symbols
                ctx.font = '24px Arial';
                const x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                
                // Adjusting y position to reduce speed
                y -= 1;

                // If symbol goes off-screen, reset its position
                if (y < 0) {
                    y = canvas.height;
                }

                ctx.fillText(symbol, x, y);
            });

            animationFrameId = requestAnimationFrame(drawCryptos);
        };

        // Redraw on window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Initial draw
        drawCryptos();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
            <canvas ref={canvasRef} style={{ backgroundColor: '#0f0f0f', display: 'block' }} />
        </div>
    );
};

export default CryptocurrencyBackground;
