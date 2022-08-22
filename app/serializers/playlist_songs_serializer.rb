class PlaylistSongsSerializer < ActiveModel::Serializer

    attributes :playlist
    has_one :user
    has_one :song
  
    def playlist
      "#{self.object.song.title} - #{self.object.song.song_url}"
    end
  
  end