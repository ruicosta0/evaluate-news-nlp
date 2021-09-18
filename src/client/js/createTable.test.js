import { createTableBody } from './createTable';

test('create table body element', () => {
    expect(createTableBody()).toBeDefined();
    expect(createTableBody().outerHTML).toEqual('<tbody id=\"table_body\"></tbody>');
})


