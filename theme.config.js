export default {
    github: 'https://github.com/Wallvon/MOFH-API-Docs',
    projectLink: 'https://github.com/Wallvon/MOFH-API-Docs', // GitHub link in the navbar
    docsRepositoryBase: 'https://github.com/Wallvon/MOFH-API-Docs/blob/main', // base URL for the docs repository
    titleSuffix: ' – MyOwnFreeHost API Documentation',
    nextLinks: true,
    prevLinks: true,
    search: true,
    customSearch: null, // customizable, you can use algolia for example
    darkMode: true,
    footer: true,
    footerText: (
        <>
            MIT {new Date().getFullYear()} © <a href="https://robert-s.dev" target="_blank" rel="noopener noreferrer">Robert S.</a>
        </>
    ),
    footerEditLink: `Edit this page on GitHub`,
    logo: (
        <>
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 259 90"
                fill="currentColor"
            >
                <path d="M181.5 8.2c-6 2.1-11.9 7.4-15.2 13.8-2.1 3.8-2.2 5.4-2.3 32.5l-.1 28.5H175V52h22V40h-22v-3.8c0-5.1 3.7-12.2 7.9-14.9 2.5-1.7 4.9-2.3 8.7-2.3h5.4V7l-6.2.1c-3.5 0-7.6.5-9.3 1.1zM200 45v38h10.8l.4-15.9c.3-14.3.5-16.2 2.4-18.8 7.3-9.8 19.5-9.8 26.8 0 1.9 2.6 2.1 4.5 2.4 18.8l.3 15.9H254V65.7c0-14.6-.3-17.8-1.9-21.3-2.4-5.3-7.7-10.5-13.3-13.3-6-2.9-17.2-2.9-22.8-.1-2.2 1.1-4.2 2-4.5 2-.3 0-.5-5.9-.5-13V7h-11v38zM19.2 31.6C13.3 34.5 9.6 38.5 6.6 45c-1.7 3.8-2.1 7-2.4 21.2L3.8 83H16V68.3c0-12.7.3-15.2 2-18.7 2.8-5.7 6.3-7.9 13-8.4 4.5-.3 6.1 0 8.9 2 6.6 4.4 7.6 7.4 7.9 24.5l.4 15.3h10.6l.4-15.9c.3-14.3.5-16.2 2.4-18.8 7.3-9.8 19.5-9.8 26.8 0 1.9 2.6 2.1 4.5 2.4 18.8l.4 15.9h10.9l-.3-18.3-.3-18.3-3.2-4.9c-1.8-2.8-5.5-6.6-8.4-8.5-4.6-3.1-6-3.5-13.1-3.9-9.4-.4-14.6 1.2-20.1 6.3l-3.6 3.3-2.7-2.8c-7-7.3-21.2-9.3-31.2-4.3zM121.4 30.9c-5.2 2.4-11.1 8.3-13.5 13.5-2.9 6.4-2.2 22.9 1 25.6.3.3 1.8 2.1 3.3 4.1 4.2 5.7 11.6 8.9 20.4 8.9 8.6 0 13-1.7 18.9-7.1 6.2-5.7 8.8-12.4 8.3-21.3-.2-4-1.2-8.7-2.2-10.7-2.4-5-7.9-10.4-13.2-12.8-5.8-2.8-17.2-2.8-23-.2zm17.8 11.2c12.4 6.6 12.4 21.5.1 27.8-3.3 1.7-10.4 1.3-14.3-.8-3.8-2-8-8.8-8-13.1 0-4.3 4.2-11.1 8-13.1 3.9-2.1 11-2.5 14.2-.8z"/>
            </svg>
        </>
    ),
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="MyOwnFreeHost API Documentation" />
            <meta name="og:title" content="MyOwnFreeHost API Documentation" />
        </>
    ),
}