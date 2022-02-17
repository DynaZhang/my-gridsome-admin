module.exports = ({ env }) => ({
    defaultConnection: 'default',
    connections: {
        default: {
            connector: 'bookshelf',
                settings: {
                client: 'mysql',
                host: env('DATABASE_HOST', '101.43.210.74'),
                port: env.int('DATABASE_PORT', 3306),
                database: env('DATABASE_NAME', 'strapi'),
                username: env('DATABASE_USERNAME', 'root'),
                password: env('DATABASE_PASSWORD', 'root123456')
            },
            options: {},
        },
    }
});
