import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
        description: 'This is a simple CRUD API application made with Express and documented with Swagger',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
      components: {
        schemas: {
          Contact: {
            type: 'object',
            required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
            properties: {
              _id: {
                type: 'string',
                description: 'The unique identifier of the contact',
              },
              firstName: {
                type: 'string',
                description: 'First name of the contact',
              },
              lastName: {
                type: 'string',
                description: 'Last name of the contact',
              },
              email: {
                type: 'string',
                format: 'email',
                description: 'Email address of the contact',
              },
              favoriteColor: {
                type: 'string',
                description: 'Favorite color of the contact',
              },
              birthday: {
                type: 'string',
                format: 'date',
                description: 'Birthday of the contact',
              }
            }
          }
        }
      }
    },
    apis: ['./src/controllers/*.ts'], // adjust the path as necessary
  };
  

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: any): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
