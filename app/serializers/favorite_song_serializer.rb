class FavoriteSongSerializer < ActiveModel::Serializer
  attributes :id, :song_id, :playlist_id, :song_name, :song_url, :album_img

  def song_name
    object.song.title
  end

  def song_url
    object.song.song_url
  end

  def album_img
    object.song.album_img
  end


end
