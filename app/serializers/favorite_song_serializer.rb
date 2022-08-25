class FavoriteSongSerializer < ActiveModel::Serializer
  attributes :id, :song_id, :playlist_id, :song_name, :song_url
  # belongs_to :song
  # belongs_to :playlist


  def song_name
    object.song.title
  end

  def song_url
    object.song.song_url
  end

end
