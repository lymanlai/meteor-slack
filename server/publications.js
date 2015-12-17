Meteor.publish('channels', function(){
  return Channels.find();
});

Meteor.publish("messages", function(channel){
  return Messages.find({channel: channel});
});
