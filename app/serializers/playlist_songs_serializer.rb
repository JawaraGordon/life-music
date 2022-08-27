class PlaylistSongsSerializer < ActiveModel::Serializer

    attributes :user_id, :favorite_songs, :song_id, :song_name, :song_url
    has_one :user
    has_one :song
  
    def playlist
      "#{self.object.favorite_song.title} - #{self.object.favorite_song.song_url}"
    end
  
  end