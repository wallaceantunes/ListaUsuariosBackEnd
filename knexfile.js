module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://qavirwth:iG3MWzrqIBZcsom0DFn0of7_0UrcCQpg@ziggy.db.elephantsql.com:5432/qavirwth',
        migrations: {
            directory: './src/migrations'
        },
        seeds: {
            directory: './src/seeds'
        },
        useNullAsDefault: true
    },
}