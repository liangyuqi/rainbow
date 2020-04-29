export const BarChartSchema = {
  type: 'object',
  required: ['username', 'email', 'password'],
  properties: {
    username: {
      type: 'string',
      minLength: 4,
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
      minLength: 6,
    },
    age: {
      type: 'integer',
      minimum: 0,
    },
    sex: {
      enum: ['boy', 'girl', 'secret'],
      default: 'secret',
    },
  },
};
