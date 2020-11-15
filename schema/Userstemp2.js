cube(`Userstemp2`, {
  sql: `SELECT * FROM public.userstemp2`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, country, city, createdat]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    age: {
      sql: `age`,
      type: `string`
    },
    
    country: {
      sql: `country`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    createdat: {
      sql: `createdat`,
      type: `time`
    }
  }
});
