/**
 * json schema
 * https://github.com/epoberezkin/ajv/blob/master/KEYWORDS.md#contains
 */
export const BarChartSchema = {
  type: 'object',
  required: ['xAxis', 'yAxis', 'series'],
  properties: {
    xAxis: {
      type: 'object',
      required: ['type', 'data'],
      properties: {
        type: {
          type: 'string',
          enum: ['image', 'name'],
        },
        data: {
          type: 'array',
        },
      },
    },

    yAxis: {
      type: 'object',
      required: ['type'],
      properties: {
        type: {
          type: 'string',
          enum: ['value'],
        },
      },
    },
    series: {
      type: 'array',
    },
  },
};
