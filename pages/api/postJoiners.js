const Airtable = require('airtable');
const base = new Airtable({apiKey: "keyX217mb8lxAgZS6"}).base("appH3euv1Dzz8CQx1");


export default async function(req,res) {
const {email} = req.body;
  try{

    base('join').create([
      {
        "fields":{'emails':email},
      }],function (err, records){
        if(err){
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
      res.status(200).send()

  }catch(error){
    console.error(error);
    res.status(500).send(error)
    res.json({ msg: 'Something went wrong' });
  }
}
