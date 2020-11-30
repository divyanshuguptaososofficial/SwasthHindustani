
const { g_sequelize } = require("./dbcon.js");

const Sequelize = require('sequelize');




//--------Model of city----
const g_City = g_sequelize.define('city', { 
      
      

    cy_id:{
            type:Sequelize.INTEGER(11),
            allowNull:false
    },
    cy_name:{
      type:Sequelize.STRING(60),
      default:null
    },
    cy_googlelocation:{
      type:Sequelize.STRING(100),
      default:null
    },
    cy_longitude:{
      type:Sequelize.FLOAT,
      default:null
    },
    cy_latitude:{
      type:Sequelize.FLOAT,
      default:null
    },
    st_id:{
      type:Sequelize.INTEGER(11),
      allowNull:false
    }
}, {
timestamps:false,
freezeTableName: true,
}
);
//--------Model of Client----


const g_Client = g_sequelize.define('client', { 
      
      

  cl_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false,
          autoIncrement:true,
          primaryKey: true
          
          
  },

  cl_emailid:{
    type:Sequelize.STRING(100),
    default:null,
    unique:true
  },
  cl_password:{
    type:Sequelize.STRING(100),
    default:null
  },
  cl_firstname:{
    type:Sequelize.STRING(20),
    default:null
  },
  cl_middlename:{
    type:Sequelize.STRING(20),
    default:null
  },
  cl_lastname:{
    type:Sequelize.STRING(20),
    default:null
  },
  cl_age:{
    type:Sequelize.INTEGER(11),
    default:null
  },
  cl_gender:{
    type:Sequelize.STRING(1),
    default:null
  },
  cl_number:{
     type:Sequelize.BIGINT(10),

  },
  cl_googlelocation:{
      type:Sequelize.STRING(100),
      default:null

  },
  cl_latitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  cl_longitude:{
    type:Sequelize.FLOAT,
    default:null
  },
 
  cl_registrationstatus:{
    type:Sequelize.STRING(1),
    default:null
  },
 
  cl_locationpin:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  cl_aadhaarno:{
    type:Sequelize.BIGINT(20),
    default:null
  },
  cl_panno:{
    type:Sequelize.STRING(10),
    default:null
  },
  cl_addressone:
  {
    type:Sequelize.STRING(20),
    default:null
  },
  cl_addresstwo:
  {
    type:Sequelize.STRING(20),
    default:null
  },
  cl_netmonthsalary:
  {
         type:Sequelize.BIGINT(20),
         default:null
  },
  cl_workexperience:
  {
            type:Sequelize.INTEGER(11),
            default:null
  },
}, {
timestamps:false,
freezeTableName: true,
}
);
g_Client.removeAttribute('id');
//--------Model of Clientemidetails----




const g_ClientEmiDetails = g_sequelize.define('clientemidetails', { 
      
      

  ce_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  cd_emiduedate:{
    type:Sequelize.DATE,
   
    default:null
  },
  cd_emidueamount:{
    type:Sequelize.INTEGER(11),
    default:null

  },
  cd_emipaiddate:{
    type:Sequelize.DATE,
    default:null
  },
  cd_emipaidamount:{
    type:Sequelize.INTEGER(11),
    default:null
  },
  me_id :{
     type:Sequelize.INTEGER(11),
     allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);




//--------Model of Clientmfc----




const g_ClientMfc = g_sequelize.define('clientmfc', { 
      
      

  cc_approvedamount:{
          type:Sequelize.INTEGER(11),
          default:null
  },
  cc_approvaldate:{
    type:Sequelize.DATE,
    allowNull:false,
    default:null
  },
  cc_validtill:{
    type:Sequelize.DATE,
    default:null

  },
  cl_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  mc_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);

//--------Model of country----


const g_Country = g_sequelize.define('country', { 
      
      

  co_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  co_name:{
    type:Sequelize.STRING(30),
   
    default:null
  },
  co_googlelocation:{
    type:Sequelize.STRING(100),
    default:null

  },
  co_latitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  co_longitude:{
    type:Sequelize.FLOAT,
    default:null
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);

//--------Model of creditapplication----

const g_CreditAppilication = g_sequelize.define('creditapplication', { 
      
      
ca_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  ca_applieddate:{
    type:Sequelize.DATE,
    default:null
  },
  ca_confirmeddate:{
    type:Sequelize.DATE,
    default:null

  },
  cl_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  ca_finalquote:{
    type:Sequelize.INTEGER(11),
    default:null
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);

//--------Model of creditquotes----

const g_CreditQuotes = g_sequelize.define('creditquotes', { 
      
      

  cq_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  cq_amount:{
    type:Sequelize.FLOAT,
   
    default:null
  },
  cq_dateoffered:{
    type:Sequelize.DATE,
    default:null

  },
  mc_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  cl_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);

//--------Model of hospital----

const g_Hospital = g_sequelize.define('hospital', { 
      
      

  hs_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },

  hs_emailid:{
    type:Sequelize.STRING(100),
    default:null
  },
  hs_password:{
    type:Sequelize.STRING(100),
    default:null
  },
  hs_name:{
    type:Sequelize.STRING(50),
    default:null
  },
  
  hs_description:{
    type:Sequelize.STRING(200),
    default:null
  },
  hs_address:{
    type:Sequelize.STRING(100),
    default:null
  },
  hs_googlelocation:{
      type:Sequelize.STRING(100),
      default:null

  },
  hs_latitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  hs_longitude:{
    type:Sequelize.FLOAT,
    default:null
  },
 
  hs_registrationstatus:{
    type:Sequelize.STRING(1),
    default:null
  },
 
  lc_locationpin:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
 
}, {
timestamps:false,
freezeTableName: true,
}
);


//--------Model of mfc----


const g_Mfc = g_sequelize.define('mfc', { 
      
      

  mc_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  mc_name:{
    type:Sequelize.STRING(50),
   
    default:null
  },
  mc_description:{
     type:Sequelize.STRING(200),
     default:null
  },
  mc_location:{
    type:Sequelize.STRING(20),
    default:null

  },
  mc_latitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  mc_longitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  mc_registrationstatus:{
    type:Sequelize.STRING(1),
    default:null
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);

//--------Model of services----

const g_Services = g_sequelize.define('services', { 
      
      

  sv_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  sv_name:{
    type:Sequelize.STRING(100),
   
    default:null
  },
  sv_desccription:{
    type:Sequelize.STRING(500),
    default:null

  },
  sv_type:{
    type:Sequelize.STRING(1),
    default:null
  },
  hs_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);

//--------Model of state----

const g_State = g_sequelize.define('state', { 
      
      

  st_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  st_name:{
    type:Sequelize.STRING(60),
   
    default:null
  },
  st_googlelocation:{
    type:Sequelize.STRING(100),
    default:null

  },
  st_latitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  st_longitude:{
    type:Sequelize.FLOAT,
    default:null
  },
  co_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);


//--------Model of treatment----

const g_Treatment = g_sequelize.define('treatment', { 
      
      

  tt_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  tt_servicerequestdate:{
    type:Sequelize.DATE,
   
    default:null
  },
  tt_servicestatus:{
    type:Sequelize.STRING(1),
    default:null

  },
  tt_serviceconfirmdate:{
    type:Sequelize.DATE,
    default:null
  },
  hs_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  sv_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  cl_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  },
  tb_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);


//--------Model of TreatmentBill----

const g_TreatmentBill = g_sequelize.define('treatmentbill', { 
      
      

  tb_id:{
          type:Sequelize.INTEGER(11),
          allowNull:false
  },
  tb_name:{
    type:Sequelize.STRING(100),
    default:null
},
  tb_admissiondate:{
    type:Sequelize.DATE,
   default:null
  },

  tb_admissionform:{
    type:Sequelize.BLOB
    },

  tb_dischargeddate:{
    type:Sequelize.DATE,
    default:null
  },

  tb_dategenerated:{
    type:Sequelize.DATE,
    default:null
  },
  tb_bill:{
    type:Sequelize.BLOB,
    
  },
  tb_status:{
    type:Sequelize.STRING(1),
    default:null
  },
  tb_paiddate:{
    type:Sequelize.DATE,
    default:null
  },
  mc_id:{
    type:Sequelize.INTEGER(11),
    allowNull:false
  }
  
}, {
timestamps:false,
freezeTableName: true,
}
);






g_sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`);
   
      });
  
      

module.exports={


   
    g_Client:g_Client,
    g_ClientEmiDetails: g_ClientEmiDetails,
    g_Services:g_Services
};
