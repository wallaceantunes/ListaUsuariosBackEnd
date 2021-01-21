exports.up = (knex) => {
    return knex.schema
        .createTable('addresses', (table) => {
            table.increments('id').primary()
            table.string('address')
            table.string('neighborhood')
            table.string('city')
            table.string('uf')
        })
        .createTable('clients', (table) => {
            table.increments('id').primary()
            table.string('name')
            table.string('email')
            table.string('phone')
            table
                .integer('addressId')
                .unsigned()
                .references('id')
                .inTable('addresses')
                .onDelete('SET NULL')
                .index()
        })
}

exports.down = (knex) => {
    return knex.schema
        .dropTableIfExists('clients')
        .dropTableIfExists('addresses')
}