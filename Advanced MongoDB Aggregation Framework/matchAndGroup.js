📥 Instructions
$match and $group Stages

You have a database called bird_data with a collection of sightings. We want to use this data to find out where we should go to see our favorite bird, Eastern Bluebirds. We’ll use the location coordinates (latitude and longitude) and the number of sightings in each location to identify the best places to view the Eastern Bluebirds.

You are now connected to an Atlas cluster and to the bird_data database. Use the sightings collection in this lab.

First, create an aggregation pipeline, which will contain two stages. (Forgot the method for aggregation? Check the hint below!)

Create a $match stage that filters for documents about our target bird with the species_common value, "Eastern Bluebird"

Create a $group stage that groups documents based on the latitude and longitude of the sighting, stored in the location.coordinates field.

Within the groups, create a field to show the $count of how many documents are in each group, called "number_of_sightings".

Run your aggregation pipeline, and find out where to look for Eastern Bluebirds!

Once you complete this lab, compare your answer to the correct answer in the Review and Solved Code section, then select Next.


💡 Hints
Remember that an aggregation pipeline must start with db.<collection>.aggregate([]) in the MongoDB shell.
The first stage will be a $match stage, which takes a query to find specific documents.
The second stage will be a $group stage, which will require:
_id, the field used to group the documents
$count, the accumulator operator used to count the number of documents in each group
The schema for the documents in the sightings collection uses a coordinates array to track the location of the bird sighting, the first element (0) is longitute and the second element (1) is latitude, { location: { coordinates: [x, y] } }.

🏁 Review and Solved Code
You can access the collection you want to use with dot notation:

javascript

copy
db.sightings
Use the aggregate method to set up the aggregation pipeline.

The first stage will be $match which accepts a simple query to filter for specific documents. In this case, we use the species_commonfield to query for our favorite bird, the Eastern Bluebird.

javascript

copy

run
db.sightings.aggregate([
  {
    $match: {
        species_common: 'Eastern Bluebird'
    }
  }
])
Then we want to see how many sightings occured at each location, so we can go to the place where we are most likely to see an Eastern Bluebird. To do this, we will use $group and set the required _id field to be the location coordinates, and create a field for the number of sightings, using $count to total the number of records at each of the coordinate points.

javascript

copy

run
db.sightings.aggregate([
  {
    $match: {
        species_common: 'Eastern Bluebird'
    }
  }, {
    $group: {
        _id: '$location.coordinates',
        number_of_sightings: { $count: {} }
    }
  }
])
Solved Code
javascript

copy

run
db.sightings.aggregate([
  {
    $match: {
        species_common: 'Eastern Bluebird'
    }
  }, {
    $group: {
        _id: '$location.coordinates',
        number_of_sightings: {
            $count: {}
        }
    }
  }
