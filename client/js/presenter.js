var Presenter = {
  load: function(event) {
    var self = this,
    ele = event.target,
    videoURL = ele.getAttribute("videoURL")
    if(videoURL) {
      var player = new Player();
      var playlist = new Playlist();
      var mediaItem = new MediaItem("video", videoURL);
 
      player.playlist = playlist;
      player.playlist.push(mediaItem);
      player.present();
    }
  },

  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },
  
  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },
 
  pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
  },

  createAlert : function(title, description) {
  var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
      <alertTemplate>
        <title>${title}</title>
        <description>${description}</description>
        <button><text>I'm sorry!</text></button>
      </alertTemplate>
    </document>`
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
  }
}