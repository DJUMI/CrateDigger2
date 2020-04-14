//convert listing_id to ObjectId
db.products.find().forEach(function (ch) { db.products.update({ "_id": ch._id }, { "$set": { "listing_id": NumberInt(ch.listing_id) } }); });
//convert release_id to int
db.products.find().forEach(function (ch) { db.products.update({ "_id": ch._id }, { "$set": { "release_id": NumberInt(ch.release_id) } }); });
//convert price to float
db.products.find().forEach(function (ch) { db.products.update({ "_id": ch._id }, { "$set": { "price": parseFloat(ch.price) } }); });