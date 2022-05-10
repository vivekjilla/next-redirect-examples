module.exports = {
    async redirects() {
        return [
            {
                source: '/config',
                destination: 'https://www.google.com',
                permanent: false,
            }
        ]
    }

}