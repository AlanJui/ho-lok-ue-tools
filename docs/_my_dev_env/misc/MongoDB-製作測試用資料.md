# MongoDB-製作測試用資料

透過 MongoDB Shell - mongo  ，以「指令」型態製作測試用資料。


    use rest-001-dev
    
    db.heroes.insertMany([
      {sn: 11, name: 'Mr. Nice'},
      {sn: 12, name: 'Narco'},
      {sn: 13, name: 'Bombasto'},
      {sn: 14, name: 'Celeritas'},
      {sn: 15, name: 'Magneta'},
      {sn: 16, name: 'RubberMan'},
      {sn: 17, name: 'Dynama'},
      {sn: 18, name: 'Dr IQ'},
      {sn: 19, name: 'Magma'},
      {sn: 20, name: 'Tornado'}
    ]);



    db.heros.insertMany([
      {sn: 11, name: 'Mr. Nice'},
      {sn: 12, name: 'Narco'},
      {sn: 13, name: 'Bombasto'},
      {sn: 14, name: 'Celeritas'},
      {sn: 15, name: 'Magneta'},
      {sn: 16, name: 'RubberMan'},
      {sn: 17, name: 'Dynama'},
      {sn: 18, name: 'Dr IQ'},
      {sn: 19, name: 'Magma'},
      {sn: 20, name: 'Tornado'}
    ]);

