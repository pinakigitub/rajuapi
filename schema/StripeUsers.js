cube(`StripeUsers`, {
  sql: `SELECT * FROM public."stripeUsers"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, stripeCustid, createdat, updatedat]
    },
    
    amount: {
      sql: `amount`,
      type: `sum`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    email: {
      sql: `email`,
      type: `string`
    },
    
    stripeCustid: {
      sql: `${CUBE}."stripe_custId"`,
      type: `string`
    },
    
    plantype: {
      sql: `${CUBE}."planType"`,
      type: `string`
    },
    
    coupon: {
      sql: `coupon`,
      type: `string`
    },
    
    ispaymentodmethodeadded: {
      sql: `${CUBE}."isPaymentodMethodeAdded"`,
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
