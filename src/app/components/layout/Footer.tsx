import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem 0', color: '#6c757d', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Studio 1601. All rights reserved.
        </footer>
    );
};

export default Footer;