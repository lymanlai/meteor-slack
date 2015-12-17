Template.listings.helpers({
  channels: function(){
    return Channels.find();
  }
});

Template.channel.helpers({
  active: function(){
    if(Session.get('channel') === this.name){
      return 'active';
    } else {
      return '';
    }
  }
});

Template.messages.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('message', Session.get('channel'));
  });
});
