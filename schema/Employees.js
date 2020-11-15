cube(`Employees`, {
  sql: `SELECT * FROM public."Employees"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, createdat, updatedat]
    }
  },
  
  dimensions: {
    id: {
      sql: `${CUBE}."Id"`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `${CUBE}."Name"`,
      type: `string`
    },
    
    location: {
      sql: `${CUBE}."Location"`,
      type: `string`
    },
    
    department: {
      sql: `${CUBE}."Department"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    }
  }
});
